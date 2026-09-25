#!/usr/bin/env python3
"""Build presets/marketing-studio/<type>/<slug>.md and the INDEX section from
raw/presets/marketing_studio_list_c*.json (get_presets pages) and
raw/presets/marketing_studio_schema_<type>.json (detail input schemas)."""
import glob, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PRESETS = os.path.join(ROOT, "presets")
MS = os.path.join(PRESETS, "marketing-studio")


def slugify(s):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", s.lower())).strip("-") or "preset"


def load_items():
    pages = []
    for f in glob.glob(os.path.join(HERE, "presets", "marketing_studio_list_c*.json")):
        c = int(re.search(r"_c(\d+)\.json$", f).group(1))
        pages.append((c, json.load(open(f))))
    items, seen, total = [], set(), None
    for c, d in sorted(pages):
        total = d.get("total", total)
        for it in d["items"]:
            if it["id"] not in seen:
                seen.add(it["id"])
                items.append(it)
    return items, total


def load_schemas():
    out = {}
    for f in glob.glob(os.path.join(HERE, "presets", "marketing_studio_schema_*.json")):
        d = json.load(open(f))
        out[d["type"]] = d
    return out


def existing_paths():
    """id -> relative path of already-written files, so names stay stable."""
    m = {}
    for f in glob.glob(os.path.join(MS, "*", "*.md")):
        mm = re.search(r"\*\*id:\*\* `([0-9a-f-]+)`", open(f).read())
        if mm:
            m[mm.group(1)] = os.path.relpath(f, MS)
    return m


def schema_lines(sch):
    if not sch:
        return []
    ex = sch.get("execution") or {}
    props = (ex.get("input_schema") or {}).get("properties") or {}
    req = set((ex.get("input_schema") or {}).get("required") or [])
    if not props:
        return []
    lines = ["", "## Inputs (`execute_preset`)", "",
             f"Input schema shared by the `{sch['type']}` type (sampled from preset `{sch.get('sample_preset_id')}`):", ""]
    for k, v in props.items():
        bits = [v.get("type", "")]
        if v.get("x-media"):
            bits.append(f"media:{v['x-media']}")
        if v.get("enum"):
            bits.append("one of " + ", ".join(map(str, v["enum"])))
        if "maxLength" in v:
            bits.append(f"max {v['maxLength']} chars")
        if "default" in v:
            bits.append(f"default {v['default']}")
        title = v.get("title", "")
        lines.append(f"- `{k}`{' (required)' if k in req else ''}: {title} — {'; '.join(b for b in bits if b)}")
    return lines


def main():
    items, total = load_items()
    schemas = load_schemas()
    known = existing_paths()
    used = set(known.values())
    rows = []
    for it in items:
        rel = known.get(it["id"])
        if not rel:
            base = slugify(it["name"])
            rel = f"{it['type']}/{base}.md"
            if rel in used:
                rel = f"{it['type']}/{base}-{it['id'][:8]}.md"
            used.add(rel)
        path = os.path.join(MS, rel)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        body = [
            f"# {it['name']}", "",
            f"- **id:** `{it['id']}`",
            "- **source:** marketing_studio",
            f"- **type:** {it['type']}",
            f"- **preview ({it['preview_type']}):** {it['preview_url']}",
        ]
        if it.get("thumbnail_url") and it["thumbnail_url"] != it["preview_url"]:
            body.append(f"- **thumbnail:** {it['thumbnail_url']}")
        body += ["", f"Open with `get_presets(source:'marketing_studio', preset_id:'{it['id']}')`. Execution consumes credits."]
        body += schema_lines(schemas.get(it["type"]))
        open(path, "w").write("\n".join(body) + "\n")
        rows.append((it, rel))

    # INDEX section
    idx_path = os.path.join(PRESETS, "INDEX.md")
    idx = open(idx_path).read()
    counts = {}
    for it, _ in rows:
        counts[it["type"]] = counts.get(it["type"], 0) + 1
    sec = [f"## Marketing Studio presets ({len(rows)} of {total})", "",
           "By type: " + " · ".join(f"`{k}` {v}" for k, v in sorted(counts.items())), "",
           "| # | Name | Type | Preview |", "|---|---|---|---|"]
    for i, (it, rel) in enumerate(rows, 1):
        sec.append(f"| {i} | [{it['name']}](marketing-studio/{rel}) | {it['type']} | [{it['preview_type']}]({it['preview_url']}) |")
    new_sec = "\n".join(sec) + "\n\n"
    idx = re.sub(r"## Marketing Studio presets \(.*?\)\n.*?(?=\n## )", new_sec.rstrip("\n") + "\n", idx, flags=re.S)
    idx = re.sub(r"\| Marketing Studio \(`source:marketing_studio`\) \| \d+ \| [^\n]*\|",
                 f"| Marketing Studio (`source:marketing_studio`) | {total} | {len(rows)} |", idx)
    open(idx_path, "w").write(idx)
    print(len(rows), total, counts)


if __name__ == "__main__":
    main()
