import json
d=json.load(open('docs/higgsfield/raw/models_list_p1.json'))
items=d['items']
WHEN={
 'cinematic_studio_3_0':'Top pick for cinematic hero shots / film scenes; up to 4K, start+end frame control.',
 'cinematic_studio_video_v2':'Cinematic camera + color with genre control; good for dramatic scenes at lower cost than 3.0.',
 'cinematic_studio_video':'Older Cinema Studio video; solid dramatic compositions.',
 'cinematic_studio_2_5':'Cinematic keyframes/stills (up to 4K) to feed image-to-video; supports Elements.',
 'kling3_0':'Multi-shot sequences inside one clip, native audio sync, start/end frames; 3-15s; strong default for storytelling. Supports Elements.',
 'kling3_0_turbo':'Fast/cheap drafts of Kling 3.0 motion.',
 'kling2_6':'Cinematic motion + physics from a start image; legacy.',
 'kling_video_edit':'Edit an existing clip with text + reference images (Kling Omni Edit).',
 'seedance_2_0':'Reference-driven video: image/video/audio refs, consistent identity, multi-SKU products, 4K; best for character/product consistency across scenes. Supports Elements.',
 'seedance_2_0_mini':'Budget Seedance 2.0 for drafts (480p/720p).',
 'seedance_2_5':'Longest single clip (4-30s), omni-reference, video edit and video extension (forward/backward) — use to extend shots into longer continuous takes.',
 'ad_multiplier':'Seedance 2.5-powered edit of one 4-30s ad into many variants (swap people/products/backgrounds). Use via ad-multiplier workflow.',
 'veo3_1':'Ultra-realistic top-tier cinematic quality, 4/6/8s, native audio/dialogue; premium hero shots.',
 'veo3_1_lite':'Cheap Veo for batch clips, supports start+end frames.',
 'veo3':'Reliable cinematic Veo 3.',
 'wan3_0':'T2V, first/last-frame and multimodal references with native audio, up to 30s; good long takes.',
 'wan3_0_prime':'Higher-tier Wan 3.0.',
 'wan2_7':'Synchronized audio, character-consistent video.',
 'wan2_6':'Stylized/experimental looks.',
 'minimax_h3':'2K multimodal refs with keyframes; batch up to 4.',
 'minimax_h3_max':'Fast multimodal refs/keyframes.',
 'minimax_hailuo':'Natural physics and facial emotion; good for acting close-ups.',
 'gemini_omni':'Reference-driven video with native audio (720p).',
 'gemini_omni_flash_1_1':'T2V/I2V/ref-to-video/edit up to 4K, 3-10s.',
 'grok_video_v15':'Physics + camera motion, image & audio refs.',
 'flux_3_video':'T2V, multi-frame I2V and continuation with synchronized audio, 5-20s.',
 'flux_3_video_edit':'Text-prompt edit of a video (first 15s, 1 credit/sec per description).',
 'hf_mult_motion_control':'Genjutsu: transfer motion from reference video to subjects in images (dance/action transfer).',
 'hf_mult_replace_object':'Genjutsu: replace an object in a video with a reference image.',
 'marketing_studio_video':'One-click product ads (TikTok/Reels) — Marketing Studio.',
 'sync_so':'Lipsync a video to an audio track (Sync Lipsync 3).',
 'soul_2':'Photoreal UGC/fashion/character stills; the only models accepting trained Soul IDs (with soul_cinematic).',
 'soul_cinematic':'Cinema-grade stills/concept art with Soul identity.',
 'soul_cast':'Consistent cinematic character identity (casting).',
 'soul_location':'Environments/locations for scene consistency.',
 'nano_banana_pro':'Best overall image quality, text rendering, diagrams; multi-reference; used for thumbnails/keyframes. Supports Elements.',
 'nano_banana_2':'Fast high-quality images with masks/edit; supports Elements.',
 'gpt_image_2':'Strong prompt adherence, text, up to 4K; supports Elements.',
 'gpt_image_2_5':'Newest GPT image gen/edit, up to max quality 4K.',
 'seedream_v4_5':'4K precise edits/transformations; supports Elements.',
 'seedream_v5_lite':'Instruction-based editing with visual reasoning.',
 'marketing_studio_image':'One-click product image ads.',
 'ms_image':'DTC ad images with brand kit, avatars, products.',
 'text2speech_v2':'TTS with ElevenLabs/MiniMax/Seed engines — voiceovers; needs voice_id+voice_type from list_voices.',
 'seed_audio':'Text-to-audio with voice/audio reference (voiceover, SFX).',
 'topaz_video':'Upscale final video to 1080p/2160p.',
 'bytedance_video_upscale':'Upscale video to 1080p/2k/4k.',
 'clipify':'Cut a YouTube video into subtitled shorts.',
}
def fmt_param(p):
    s=f"`{p['name']}` ({p.get('type','')}"
    if p.get('required')=='required': s+=', required'
    s+=')'
    if 'options' in p and p['options']: s+=f" options={p['options']}"
    if 'min' in p: s+=f" range={p.get('min')}–{p.get('max')}"
    if 'default' in p: s+=f" default={p['default']}"
    if p.get('description'): s+=f" — {p['description']}"
    return s
out=["# Higgsfield models (live catalog)","",
f"Source: `models_explore(action:'list', limit:100)` on 2026-09-25 — **{len(items)} models** (`has_more:false`). Raw JSON: [raw/models_list_p1.json](raw/models_list_p1.json).","",
"> **Credit cost is not exposed by the MCP API** (neither `list`, `get` nor `recommend`). See [my-account.md](my-account.md) / [guides/pricing-and-credits.md](guides/pricing-and-credits.md) for observed/public costs. General rule from parameter descriptions: longer duration, higher resolution, `pro`/`4k`/`std` modes and audio ON cost more; `sound:'off'` / `mode:'fast'` / lite/mini/turbo variants cost less.","",
"Use `models_explore(action:'recommend', query:'<goal + inputs>')` when unsure; `get` returns the same record as `list`.","",
"Media roles legend: `start_image`/`end_image` = keyframes; `image_references` = identity/style/product refs; `video_references` = motion/edit source; `audio_references` = voice/music ref; `image` = single input image.",""]
from collections import Counter
c=Counter(i['output_type'] for i in items)
out.append("Counts: "+", ".join(f"{k}: {v}" for k,v in c.items())+"\n")
for t in ['video','image','audio','3d']:
    out.append(f"## {t.upper()} models\n")
    out.append("| id | name | provider | duration | res/quality/mode | inputs (media roles) | aspect ratios | unlim | when to choose |")
    out.append("|---|---|---|---|---|---|---|---|---|")
    for i in items:
        if i['output_type']!=t: continue
        ps=i.get('parameters',[])
        dur=next((p for p in ps if p['name']=='duration'),None)
        ds=''
        if dur:
            ds=f"{dur.get('min')}–{dur.get('max')}s" if 'min' in dur else str(dur.get('options',''))
        rq='; '.join(f"{p['name']}: {'/'.join(map(str,p['options']))}" for p in ps if p['name'] in('resolution','quality','mode') and p.get('options'))
        roles=', '.join(sorted({r for m in i.get('medias',[]) for r in m.get('roles',[])})) or 'text only'
        out.append(f"| `{i['id']}` | {i['name']} | {i.get('provider_name','')} | {ds} | {rq} | {roles} | {', '.join(i.get('aspect_ratios',[]))} | {'✓' if i.get('supports_unlim') else ''} | {WHEN.get(i['id'], i.get('description',''))} |")
    out.append("")
out.append("## Full parameter reference\n")
for i in items:
    out.append(f"### `{i['id']}` — {i['name']} ({i['output_type']}, {i.get('provider_name','')})\n")
    if i.get('description'): out.append(i['description']+"\n")
    if i['id'] in WHEN: out.append(f"**When to choose:** {WHEN[i['id']]}\n")
    for p in i.get('parameters',[]): out.append("- "+fmt_param(p))
    for m in i.get('medias',[]):
        out.append(f"- media `{m['name']}`: type={m.get('type')} roles={m.get('roles')}"+(f" max={m['max']}" if 'max' in m else '')+(f" — {m['description']}" if m.get('description') else ''))
    if i.get('aspect_ratios'): out.append(f"- aspect_ratios: {', '.join(i['aspect_ratios'])}")
    if i.get('tags'): out.append(f"- tags: {', '.join(i['tags'])}")
    out.append("")
open('docs/higgsfield/models.md','w').write('\n'.join(out))
print(len(out))
