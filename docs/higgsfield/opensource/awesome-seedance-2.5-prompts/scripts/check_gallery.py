#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validate the multilingual README-first Seedance 2.5 video gallery."""

from __future__ import annotations

import argparse
import re
import sys
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parents[1]
README_EN = ROOT / "README.md"
README_ZH = ROOT / "README.zh-CN.md"
README_PT = ROOT / "README.pt-BR.md"
README_HI = ROOT / "README.hi-IN.md"
README_JA = ROOT / "README.ja-JP.md"
README_KO = ROOT / "README.ko-KR.md"
README_PATHS = (README_EN, README_ZH, README_PT, README_HI, README_JA, README_KO)
MAX_README_BYTES = 500 * 1024
MAX_LOCAL_MEDIA_BYTES = 10 * 1024 * 1024
MAX_FIRST_ENTRY_LINE = 45
EXPECTED_ENTRY_IDS = tuple(f"video-{number:03d}" for number in range(1, 21))
COMMUNITY_ENTRY_IDS = {
    "video-004",
    "video-005",
    "video-006",
    "video-007",
    "video-008",
    "video-010",
    "video-017",
    "video-020",
}
OFFICIAL_SOURCE = (
    "https://ark.volcengine.com/promotion?modelName=seedance-2-5"
)
LANGUAGE_NAV = (
    "| [English](README.md) | [简体中文](README.zh-CN.md) | "
    "[Português (Brasil)](README.pt-BR.md) | [हिन्दी](README.hi-IN.md) | "
    "[日本語](README.ja-JP.md) | [한국어](README.ko-KR.md) |\n"
    "|:---:|:---:|:---:|:---:|:---:|:---:|"
)
DATE_PATTERNS = {
    README_EN: (
        r"<!-- updated:start -->Last updated on "
        r"(\d{4}-\d{2}-\d{2})<!-- updated:end -->"
    ),
    README_ZH: (
        r"<!-- updated:start -->最后更新于 "
        r"(\d{4}-\d{2}-\d{2})<!-- updated:end -->"
    ),
    README_PT: (
        r"<!-- updated:start -->Última atualização em "
        r"(\d{4}-\d{2}-\d{2})<!-- updated:end -->"
    ),
    README_HI: (
        r"<!-- updated:start -->अंतिम अपडेट: "
        r"(\d{4}-\d{2}-\d{2})<!-- updated:end -->"
    ),
    README_JA: (
        r"<!-- updated:start -->最終更新日："
        r"(\d{4}-\d{2}-\d{2})<!-- updated:end -->"
    ),
    README_KO: (
        r"<!-- updated:start -->마지막 업데이트: "
        r"(\d{4}-\d{2}-\d{2})<!-- updated:end -->"
    ),
}
CATEGORY_SPECS = (
    (1, 1, 4),
    (2, 5, 8),
    (3, 9, 10),
    (4, 11, 14),
    (5, 15, 17),
    (6, 18, 20),
)
CATEGORY_TITLES = {
    README_EN: (
        "One-take & Camera Choreography",
        "Narrative & Multi-scene",
        "VFX, Transformation & Reference Editing",
        "Brand, Product & Fashion",
        "Animation, Culture & Typography",
        "Worldbuilding & Spectacle",
    ),
    README_ZH: (
        "一镜到底与镜头调度",
        "叙事与多场景",
        "VFX、变形与参考编辑",
        "品牌、产品与时尚",
        "动画、文化与文字",
        "世界构建与奇观",
    ),
    README_PT: (
        "Plano-sequência e Coreografia de Câmera",
        "Narrativa e Múltiplas Cenas",
        "VFX, Transformação e Edição com Referências",
        "Marcas, Produtos e Moda",
        "Animação, Cultura e Tipografia",
        "Construção de Mundos e Espetáculo",
    ),
    README_HI: (
        "वन-टेक और कैमरा कोरियोग्राफी",
        "कथा और मल्टी-सीन",
        "VFX, रूपांतरण और रेफ़रेंस एडिटिंग",
        "ब्रांड, प्रोडक्ट और फ़ैशन",
        "एनिमेशन, संस्कृति और टाइपोग्राफ़ी",
        "वर्ल्डबिल्डिंग और भव्य दृश्य",
    ),
    README_JA: (
        "ワンテイク＆カメラワーク",
        "ストーリー＆マルチシーン",
        "VFX・変形・リファレンス編集",
        "ブランド・プロダクト・ファッション",
        "アニメーション・文化・タイポグラフィ",
        "世界構築・スペクタクル",
    ),
    README_KO: (
        "원테이크 및 카메라 연출",
        "내러티브 및 멀티신",
        "VFX, 변형 및 레퍼런스 편집",
        "브랜드, 제품 및 패션",
        "애니메이션, 문화 및 타이포그래피",
        "월드빌딩 및 스펙터클",
    ),
}
PROMPT_LABELS = {
    README_EN: "**Prompt:**",
    README_ZH: "**Prompt：**",
    README_PT: "**Prompt:**",
    README_HI: "**प्रॉम्प्ट:**",
    README_JA: "**プロンプト：**",
    README_KO: "**프롬프트:**",
}
SOURCE_PREFIXES = (
    "*Source:",
    "*来源：",
    "*Fonte:",
    "*स्रोत:",
    "*出典：",
    "*출처:",
)
LOCALIZATION_NAMES = {
    README_EN: "English",
    README_ZH: "Simplified Chinese",
    README_PT: "Brazilian Portuguese",
    README_HI: "Hindi",
    README_JA: "Japanese",
    README_KO: "Korean",
}
FORBIDDEN_READER_UI = (
    "**Origin:**",
    "**Workflow:**",
    "**Prompt status:**",
    "**Result:**",
    "**Model evidence:**",
    "**Author:**",
    "**来源类型:**",
    "**工作流:**",
    "**Prompt 状态:**",
    "**结果:**",
    "**模型证据:**",
    "**作者:**",
    "**Origem:**",
    "**Fluxo de trabalho:**",
    "**Status do Prompt:**",
    "**Resultado:**",
    "**Evidência do modelo:**",
    "**Autor:**",
    "**मूल:**",
    "**वर्कफ़्लो:**",
    "**प्रॉम्प्ट स्थिति:**",
    "**परिणाम:**",
    "**मॉडल प्रमाण:**",
    "**लेखक:**",
    "**由来：**",
    "**ワークフロー：**",
    "**プロンプトの状態：**",
    "**結果：**",
    "**モデルの根拠：**",
    "**作成者：**",
    "**원본:**",
    "**워크플로:**",
    "**프롬프트 상태:**",
    "**결과:**",
    "**모델 근거:**",
    "**작성자:**",
    "**Cases:**",
    "**案例：**",
    "**事例：**",
    "**사례:**",
    "[↑ Back to top]",
    "[↑ 返回顶部]",
    "[↑ トップへ戻る]",
    "[↑ 맨 위로]",
    "Public preview media mirror",
    "公开预览媒体镜像",
    "公開プレビュー用メディアミラー",
    "공개 미리보기 미디어 미러",
    "Prompt (published request text; partial)",
    "Prompt（已发布的请求文字；不完整）",
    "プロンプト（公開されたリクエスト文；一部）",
    "프롬프트(공개된 요청문, 일부)",
)

ENTRY_RE = re.compile(r"<!--\s*entry:(video-\d{3})\s*-->")
HEADING_RE = re.compile(r"^###\s+(\d+)\.(\d+)\.\s+(.+?)\s*$", re.MULTILINE)
ALL_HEADING_RE = re.compile(r"^#{1,6}\s+(.+?)\s*$", re.MULTILINE)
ANCHOR_RE = re.compile(r'<a\s+id="([^"]+)"\s*></a>')
FENCE_RE = re.compile(r"```text\n(.*?)\n```", re.DOTALL)
URL_RE = re.compile(r"https?://[^\s)<>\"]+")
DIRECT_X_STATUS_RE = re.compile(
    r"https://x\.com/[A-Za-z0-9_]+/status/\d+"
)
ATTACHMENT_RE = re.compile(
    r"https://github\.com/user-attachments/assets/[0-9a-fA-F-]{36}"
)
ATTACHMENT_LINE_RE = re.compile(
    r"^https://github\.com/user-attachments/assets/[0-9a-fA-F-]{36}$"
)
PLACEHOLDER_LINE_RE = re.compile(r"^\{\{MEDIA_VIDEO_(\d{3})\}\}$")
MARKDOWN_LINK_RE = re.compile(r"!?\[[^\]]*]\(([^)]+)\)")
HTML_LINK_RE = re.compile(r'\b(?:href|src)="([^"]+)"')
MEDIA_EXTENSIONS = {
    ".gif",
    ".jpeg",
    ".jpg",
    ".m4v",
    ".mov",
    ".mp4",
    ".png",
    ".webm",
    ".webp",
}
HAN_RE = re.compile(r"[\u3400-\u4dbf\u4e00-\u9fff]")
DEVANAGARI_RE = re.compile(r"[\u0900-\u097f]")
KANA_RE = re.compile(r"[\u3040-\u30ff\uff65-\uff9f]")
HANGUL_RE = re.compile(r"[\u1100-\u11ff\u3130-\u318f\uac00-\ud7af]")
LATIN_RE = re.compile(r"[A-Za-z]")
PORTUGUESE_MARKER_RE = re.compile(
    r"\b(?:"
    r"ao|aos|câmera|cena|com|como|deve|durante|enquanto|filme|imagem|"
    r"luz|movimento|não|numa|para|personagem|plano|robô|segundos|sem|"
    r"sobre|tela|uma|vídeo"
    r")\b",
    re.IGNORECASE,
)


@dataclass(frozen=True)
class Entry:
    entry_id: str
    category_number: int
    item_number: int
    title: str
    body: str
    prompt: str
    media: str
    source_line: str
    primary_source: str


def expected_numbering(entry_id: str) -> tuple[int, int]:
    number = int(entry_id.rsplit("-", 1)[1])
    for category, first, last in CATEGORY_SPECS:
        if first <= number <= last:
            return category, number - first + 1
    raise AssertionError(f"entry outside category ranges: {entry_id}")


def source_line(body: str) -> str:
    for line in body.splitlines():
        if (
            line.startswith(SOURCE_PREFIXES)
            and line.endswith("*")
        ):
            return line
    return ""


def primary_source(entry_id: str, line: str) -> str:
    urls = URL_RE.findall(line)
    if entry_id in COMMUNITY_ENTRY_IDS:
        return next(
            (url for url in urls if DIRECT_X_STATUS_RE.fullmatch(url)),
            "",
        )
    return OFFICIAL_SOURCE if OFFICIAL_SOURCE in urls else ""


def parse_entries(path: Path, text: str) -> list[Entry]:
    matches = list(ENTRY_RE.finditer(text))
    if not matches:
        raise ValueError(f"{path.name}: no gallery entries found")

    entries: list[Entry] = []
    for index, marker in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        body = text[marker.end():end]
        heading = HEADING_RE.search(body)
        prompt_matches = FENCE_RE.findall(body)
        media_lines = [
            line.strip()
            for line in body.splitlines()
            if (
                ATTACHMENT_LINE_RE.fullmatch(line.strip())
                or PLACEHOLDER_LINE_RE.fullmatch(line.strip())
            )
        ]
        line = source_line(body)
        entries.append(
            Entry(
                entry_id=marker.group(1),
                category_number=int(heading.group(1)) if heading else 0,
                item_number=int(heading.group(2)) if heading else 0,
                title=heading.group(3).strip() if heading else "",
                body=body,
                prompt=prompt_matches[0] if len(prompt_matches) == 1 else "",
                media=media_lines[0] if len(media_lines) == 1 else "",
                source_line=line,
                primary_source=primary_source(marker.group(1), line),
            )
        )
    return entries


def github_slug(title: str) -> str:
    title = re.sub(r"<[^>]+>", "", title).strip().casefold()
    title = "".join(
        character
        for character in title
        if (
            character in "-_"
            or character.isspace()
            or unicodedata.category(character)[0] in {"L", "M", "N"}
        )
    )
    return re.sub(r"\s", "-", title)


def local_target(raw_target: str) -> tuple[str, str | None] | None:
    target = raw_target.strip().strip("<>")
    if not target or target.startswith(("http://", "https://", "mailto:", "{{")):
        return None
    if target.startswith("../../issues/"):
        return None
    path_part, separator, fragment = target.partition("#")
    return unquote(path_part), unquote(fragment) if separator else None


def validate_internal_links(path: Path, text: str) -> list[str]:
    errors: list[str] = []
    anchors = set(ANCHOR_RE.findall(text))
    anchors.update(github_slug(title) for title in ALL_HEADING_RE.findall(text))
    targets = [match.group(1) for match in MARKDOWN_LINK_RE.finditer(text)]
    targets.extend(match.group(1) for match in HTML_LINK_RE.finditer(text))
    for raw_target in targets:
        parsed = local_target(raw_target)
        if parsed is None:
            continue
        path_part, fragment = parsed
        target_path = path.parent / path_part if path_part else path
        if not target_path.exists():
            errors.append(f"{path.name}: broken internal path: {raw_target}")
            continue
        if (
            fragment
            and target_path.resolve() == path.resolve()
            and fragment not in anchors
        ):
            errors.append(f"{path.name}: missing anchor #{fragment}")
    return errors


def validate_entry(
    path: Path,
    entry: Entry,
    allow_placeholders: bool,
) -> list[str]:
    errors: list[str] = []
    label = f"{path.name}:{entry.entry_id}"
    anchor = re.search(
        rf'<a\s+id="{re.escape(entry.entry_id)}"\s*></a>',
        entry.body,
    )
    heading = HEADING_RE.search(entry.body)
    if not anchor or not heading or anchor.start() > heading.start():
        errors.append(f"{label}: matching anchor must appear before the title")

    expected_category, expected_item = expected_numbering(entry.entry_id)
    if (
        entry.category_number != expected_category
        or entry.item_number != expected_item
    ):
        errors.append(
            f"{label}: expected heading {expected_category}.{expected_item}"
        )
    if not entry.title:
        errors.append(f"{label}: missing title")
    if not entry.prompt.strip():
        errors.append(f"{label}: requires exactly one text prompt block")
    else:
        han_count = len(HAN_RE.findall(entry.prompt))
        devanagari_count = len(DEVANAGARI_RE.findall(entry.prompt))
        kana_count = len(KANA_RE.findall(entry.prompt))
        hangul_count = len(HANGUL_RE.findall(entry.prompt))
        latin_count = len(LATIN_RE.findall(entry.prompt))
        localized = True
        if path == README_ZH:
            localized = han_count >= 10
        elif path == README_HI:
            localized = devanagari_count >= 10
        elif path == README_PT:
            localized = (
                latin_count >= 20
                and PORTUGUESE_MARKER_RE.search(entry.prompt) is not None
            )
        elif path == README_JA:
            localized = kana_count >= 10
        elif path == README_KO:
            localized = hangul_count >= 10
        elif path == README_EN:
            localized = (
                latin_count
                >= max(
                    20,
                    han_count * 2,
                    devanagari_count * 2,
                    kana_count * 2,
                    hangul_count * 2,
                )
            )
        if not localized:
            errors.append(
                f"{label}: prompt is not localized into {LOCALIZATION_NAMES[path]}"
            )

    expected_label = PROMPT_LABELS[path]
    if expected_label not in entry.body:
        errors.append(f"{label}: prompt label must use the plain gallery template")

    if not entry.media:
        errors.append(f"{label}: requires exactly one native video line")
    elif entry.media.startswith("{{"):
        expected = (
            "{{MEDIA_VIDEO_"
            f"{entry.entry_id.rsplit('-', 1)[1]}"
            "}}"
        )
        if entry.media != expected:
            errors.append(f"{label}: unexpected media placeholder")
        if not allow_placeholders:
            errors.append(f"{label}: unpublished media placeholder remains")
    elif not ATTACHMENT_LINE_RE.fullmatch(entry.media):
        errors.append(f"{label}: video must be a bare GitHub attachment URL")

    if not entry.source_line or not entry.primary_source:
        source_type = (
            "direct X status"
            if entry.entry_id in COMMUNITY_ENTRY_IDS
            else "Volcano Ark official preview"
        )
        errors.append(f"{label}: missing {source_type} in the Source line")
    if "<img" in entry.body or re.search(r"<a\s+href=", entry.body):
        errors.append(f"{label}: linked thumbnails are not allowed")
    return errors


def validate_category_layout(path: Path, text: str) -> list[str]:
    errors: list[str] = []
    headings = re.findall(r"^##\s+([1-6])\.\s+(.+?)\s*$", text, re.MULTILINE)
    expected = [
        (str(category), CATEGORY_TITLES[path][category - 1])
        for category, _, _ in CATEGORY_SPECS
    ]
    if headings != expected:
        errors.append(f"{path.name}: category headings or order differ")
    return errors


def validate_gallery(root: Path, allow_placeholders: bool = False) -> list[str]:
    errors: list[str] = []
    texts: dict[Path, str] = {}
    parsed: dict[Path, list[Entry]] = {}

    for canonical in README_PATHS:
        path = root / canonical.name
        if not path.exists():
            errors.append(f"missing {path.name}")
            continue
        if path.stat().st_size >= MAX_README_BYTES:
            errors.append(f"{path.name}: README exceeds 500 KiB")
        text = path.read_text(encoding="utf-8")
        texts[canonical] = text
        entries = parse_entries(canonical, text)
        parsed[canonical] = entries

        if text.count(LANGUAGE_NAV) != 1:
            errors.append(
                f"{path.name}: multilingual navigation is missing or duplicated"
            )
        for fragment in FORBIDDEN_READER_UI:
            if fragment in text:
                errors.append(
                    f"{path.name}: retired reader-facing metadata remains: {fragment}"
                )
        if "<!-- entry:image-" in text:
            errors.append(f"{path.name}: image output entry found in video-only gallery")
        if len(entries) != len(EXPECTED_ENTRY_IDS):
            errors.append(
                f"{path.name}: expected 20 entries; found {len(entries)}"
            )
        ids = tuple(entry.entry_id for entry in entries)
        if ids != EXPECTED_ENTRY_IDS:
            errors.append(f"{path.name}: entry IDs or order differ")
        if len({entry.title.casefold() for entry in entries}) != len(entries):
            errors.append(f"{path.name}: duplicate title")

        first_line = (
            text.count("\n", 0, text.index("<!-- entry:")) + 1
            if "<!-- entry:" in text
            else MAX_FIRST_ENTRY_LINE + 1
        )
        if first_line > MAX_FIRST_ENTRY_LINE:
            errors.append(
                f"{path.name}: first entry starts on line {first_line}; "
                f"limit is {MAX_FIRST_ENTRY_LINE}"
            )
        for entry in entries:
            errors.extend(validate_entry(canonical, entry, allow_placeholders))
        errors.extend(validate_category_layout(canonical, text))
        errors.extend(validate_internal_links(path, text))

    if all(path in texts for path in README_PATHS):
        dates: list[str] = []
        for path, pattern in DATE_PATTERNS.items():
            match = re.search(pattern, texts[path])
            if not match:
                errors.append(f"{path.name}: visible update marker is missing")
            else:
                dates.append(match.group(1))
        if len(set(dates)) > 1:
            errors.append("multilingual update dates differ")

    if all(path in parsed for path in README_PATHS):
        english = parsed[README_EN]
        for localized_path in README_PATHS[1:]:
            localized_entries = parsed[localized_path]
            for left, right in zip(english, localized_entries):
                if left.entry_id != right.entry_id:
                    errors.append(
                        f"multilingual entry IDs or ordering differ in "
                        f"{localized_path.name}"
                    )
                    break
                for field in ("media", "primary_source"):
                    if getattr(left, field) != getattr(right, field):
                        errors.append(
                            f"multilingual drift in {localized_path.name} at "
                            f"{left.entry_id}: {field} differs"
                        )

        media = [entry.media for entry in english if entry.media]
        if len(media) != len(set(media)):
            errors.append("README.md: duplicate video attachment or placeholder")
        community_sources = [
            entry.primary_source
            for entry in english
            if entry.entry_id in COMMUNITY_ENTRY_IDS
        ]
        if len(community_sources) != len(set(community_sources)):
            errors.append("README.md: duplicate community X source")

    gitignore = root / ".gitignore"
    if not gitignore.exists():
        errors.append("missing .gitignore")
    else:
        ignored = gitignore.read_text(encoding="utf-8")
        for required in (".media-upload/", ".reference/"):
            if required not in ignored:
                errors.append(f".gitignore: missing {required}")

    for media_root in (root / "assets", root / "videos"):
        if not media_root.exists():
            continue
        for path in media_root.rglob("*"):
            if not path.is_file() or path.suffix.casefold() not in MEDIA_EXTENSIONS:
                continue
            if path.stat().st_size >= MAX_LOCAL_MEDIA_BYTES:
                errors.append(
                    f"{path.relative_to(root)}: local media exceeds 10 MiB"
                )
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--allow-placeholders",
        action="store_true",
        help="Allow exact temporary video placeholders during media preparation.",
    )
    parser.add_argument(
        "--root",
        type=Path,
        default=ROOT,
        help=argparse.SUPPRESS,
    )
    args = parser.parse_args()
    root = args.root.resolve()
    errors = validate_gallery(root, args.allow_placeholders)
    if errors:
        print(
            f"Gallery validation failed with {len(errors)} error(s):",
            file=sys.stderr,
        )
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    mode = "placeholder-tolerant" if args.allow_placeholders else "strict"
    print(
        f"Gallery validation passed: 20 entries across 6 languages ({mode} mode)."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
