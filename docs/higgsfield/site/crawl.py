"""Polite crawler for public higgsfield.ai pages (respects robots.txt Disallow).
Usage: python3 crawl.py <urls.txt> <outdir>
Saves raw HTML (outdir/html) and extracted text (outdir/text) incl. strings from Next.js RSC payloads."""
import sys, os, re, time, json, html as H, threading, queue, urllib.request, urllib.robotparser
UA="Mozilla/5.0 (compatible; SwypikKB/1.0)"
def _rules():
    rs=[]
    raw=urllib.request.urlopen(urllib.request.Request("https://higgsfield.ai/robots.txt",headers={'User-Agent':UA})).read().decode()
    for line in raw.splitlines():
        k,_,v=line.partition(':'); k=k.strip().lower(); v=v.strip()
        if k in('allow','disallow') and v:
            rx='^'+re.escape(v).replace(r'\*','.*').replace(r'\$','$')
            rs.append((k=='allow',len(v),re.compile(rx)))
    return rs
RULES=_rules()
def can_fetch(u):
    """Google semantics: longest matching rule wins; Allow wins ties."""
    p=re.sub(r'^https://higgsfield\.ai','',u) or '/'
    best=None
    for allow,ln,rx in RULES:
        if rx.match(p) and (best is None or ln>best[1] or (ln==best[1] and allow)): best=(allow,ln)
    return best is None or best[0]
urls=[u.strip() for u in open(sys.argv[1]) if u.strip()]; out=sys.argv[2]
os.makedirs(out+'/html',exist_ok=True); os.makedirs(out+'/text',exist_ok=True)
seen=set(); q=queue.Queue(); lock=threading.Lock(); log=open(out+'/crawl_log.tsv','a')
def enq(u):
    u=u.split('#')[0].rstrip('/')
    with lock:
        if u in seen: return
        seen.add(u)
    q.put(u)
for u in urls: enq(u)
def fname(u): return re.sub(r'[^A-Za-z0-9._@-]+','_',u.replace('https://higgsfield.ai/','') or 'index')[:200]
def rsc_strings(h):
    chunks=re.findall(r'self\.__next_f\.push\(\[1,"(.*?)"\]\)',h,flags=re.S)
    s=''.join(chunks)
    try: s=json.loads('"'+s+'"')
    except Exception: s=s.encode().decode('unicode_escape',errors='ignore')
    # keep long human strings
    return [m for m in re.findall(r'"([^"\\]{40,})"',s) if ' ' in m and not m.startswith('$')]
def text_of(h):
    t=re.sub(r'<script.*?</script>|<style.*?</style>|<svg.*?</svg>','',h,flags=re.S)
    t=re.sub(r'<(br|/p|/div|/h\d|/li|/pre|/blockquote)[^>]*>','\n',t); t=re.sub(r'<h(\d)[^>]*>',lambda m:'\n'+'#'*int(m.group(1))+' ',t)
    t=re.sub(r'<li[^>]*>','\n- ',t); t=re.sub(r'<[^>]+>',' ',t); t=H.unescape(t)
    t=re.sub(r'[ \t]+',' ',t); t=re.sub(r'\n\s*\n+','\n\n',t); return t.strip()
def worker():
    while True:
        try: u=q.get(timeout=20)
        except queue.Empty: return
        fn=fname(u)
        if os.path.exists(f"{out}/text/{fn}.md") or not can_fetch(u): q.task_done(); continue
        for attempt in range(3):
            try:
                r=urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':UA}),timeout=40); h=r.read().decode('utf-8','ignore'); code=r.status; break
            except urllib.error.HTTPError as e: h='';code=e.code; break
            except Exception as e: h='';code=str(e)[:40]; time.sleep(3)
        log.write(f"{u}\t{code}\t{len(h)}\n"); log.flush()
        if h and code==200:
            open(f"{out}/html/{fn}.html",'w').write(h)
            rs=rsc_strings(h)
            open(f"{out}/text/{fn}.md",'w').write(f"<!-- source: {u} -->\n\n{text_of(h)}\n\n## RSC strings\n\n"+'\n\n'.join(dict.fromkeys(rs)))
            # follow academy lesson links + blog/creator-hub internal links in same sections
            for l in re.findall(r'href="(/academy/courses/[^"?#]+)"',h): enq('https://higgsfield.ai'+l)
        time.sleep(0.7); q.task_done()
ts=[threading.Thread(target=worker) for _ in range(4)]
[t.start() for t in ts]; [t.join() for t in ts]
print('done',len(seen))
