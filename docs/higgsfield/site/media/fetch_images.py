"""Download every image referenced by crawled higgsfield.ai pages, store a 640px JPEG copy.
Usage: python3 fetch_images.py <urls.txt> <outdir>; writes <outdir>/index.tsv (url -> local file, orig bytes, WxH)."""
import sys,os,io,hashlib,threading,queue,time,urllib.request
from PIL import Image
urls=[u.strip() for u in open(sys.argv[1]) if u.strip()]; out=sys.argv[2]; os.makedirs(out+'/img',exist_ok=True)
q=queue.Queue(); [q.put(u) for u in urls]; lock=threading.Lock(); idx=open(out+'/index.tsv','a')
def w():
    while True:
        try: u=q.get_nowait()
        except queue.Empty: return
        name=hashlib.sha1(u.encode()).hexdigest()[:16]+'.jpg'; p=f"{out}/img/{name}"
        if os.path.exists(p): continue
        try:
            b=urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0 (compatible; SwypikKB/1.0)'}),timeout=60).read()
            im=Image.open(io.BytesIO(b)); im.seek(0); W,H=im.size; im=im.convert('RGB'); im.thumbnail((640,640)); im.save(p,'JPEG',quality=72,optimize=True)
            with lock: idx.write(f"{u}\timg/{name}\t{len(b)}\t{W}x{H}\n"); idx.flush()
        except Exception as e:
            with lock: idx.write(f"{u}\tERROR\t{str(e)[:60]}\t\n"); idx.flush()
        time.sleep(0.1)
ts=[threading.Thread(target=w) for _ in range(8)]; [t.start() for t in ts]; [t.join() for t in ts]; print('done')
