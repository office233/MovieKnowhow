#!/usr/bin/env python3
"""Validate the synchronized multilingual MiniMax H3 prompt gallery."""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
README_NAMES = (
    "README.md",
    "README.zh-CN.md",
    "README.pt-BR.md",
    "README.hi-IN.md",
    "README.ja-JP.md",
    "README.ko-KR.md",
)
README_PATHS = tuple(ROOT / name for name in README_NAMES)
MAX_README_BYTES = 500 * 1024
MAX_FIRST_ENTRY_LINE = 45
EXPECTED_ENTRY_IDS = tuple(f"video-{number:03d}" for number in range(1, 21))
GUIDE_SOURCE = "https://app.notion.com/p/MiniMax-H3-Model-User-Guide-3acbb3a8c3ae8106bdb0fa92a3ee6707"
X_SOURCE = "https://x.com/MiniMax_AI/status/2083008095488516262"
LANGUAGE_NAV = (
    "| [English](README.md) | [简体中文](README.zh-CN.md) | "
    "[Português (Brasil)](README.pt-BR.md) | [हिन्दी](README.hi-IN.md) | "
    "[日本語](README.ja-JP.md) | [한국어](README.ko-KR.md) |\n"
    "|:---:|:---:|:---:|:---:|:---:|:---:|"
)
CATEGORY_SPECS = ((1, 1, 3), (2, 4, 7), (3, 8, 10), (4, 11, 13), (5, 14, 16), (6, 17, 20))
CATEGORY_TITLES = {
    "README.md": ("Brand Films & Cinematic Content", "Motion Design & AI Storytelling", "Product, UI & Game Concepts", "Animation & Stylized Visuals", "Omni Reference & Performance Transfer", "Precise Multimodal Editing"),
    "README.zh-CN.md": ("品牌影片与电影化内容", "动态设计与 AI 叙事", "产品、UI 与游戏概念", "动画与风格化视觉", "全模态参考与表演迁移", "精准多模态编辑"),
    "README.pt-BR.md": ("Filmes de Marca e Conteúdo Cinematográfico", "Motion Design e Narrativas com IA", "Conceitos de Produto, UI e Jogos", "Animação e Visuais Estilizados", "Referências Omni e Transferência de Performance", "Edição Multimodal Precisa"),
    "README.hi-IN.md": ("ब्रांड फ़िल्म और सिनेमाई सामग्री", "मोशन डिज़ाइन और AI कथा", "उत्पाद, UI और गेम अवधारणाएँ", "एनीमेशन और शैलीबद्ध दृश्य", "Omni संदर्भ और प्रदर्शन ट्रांसफ़र", "सटीक मल्टीमॉडल एडिटिंग"),
    "README.ja-JP.md": ("ブランド映像とシネマティックコンテンツ", "モーションデザインとAIストーリーテリング", "製品・UI・ゲームコンセプト", "アニメーションとスタイライズ映像", "Omniリファレンスと演技転写", "精密なマルチモーダル編集"),
    "README.ko-KR.md": ("브랜드 필름과 시네마틱 콘텐츠", "모션 디자인과 AI 스토리텔링", "제품·UI·게임 콘셉트", "애니메이션과 스타일라이즈드 비주얼", "Omni 레퍼런스와 퍼포먼스 전이", "정밀 멀티모달 편집"),
}
PROMPT_LABELS = {
    "README.md": "**Prompt:**",
    "README.zh-CN.md": "**提示词:**",
    "README.pt-BR.md": "**Prompt:**",
    "README.hi-IN.md": "**प्रॉम्प्ट:**",
    "README.ja-JP.md": "**プロンプト:**",
    "README.ko-KR.md": "**프롬프트:**",
}
SOURCE_LABELS = {
    "README.md": "*Source:",
    "README.zh-CN.md": "*来源:",
    "README.pt-BR.md": "*Fonte:",
    "README.hi-IN.md": "*स्रोत:",
    "README.ja-JP.md": "*出典:",
    "README.ko-KR.md": "*출처:",
}
FORBIDDEN_READER_UI = (
    "**Origin:**", "**Workflow:**", "**Prompt status:**", "**Result:**", "**Model evidence:**", "**Author:**",
    "**来源类型:**", "**工作流:**", "**提示词状态:**", "**结果:**", "**模型证据:**", "**作者:**",
    "**Origem:**", "**Fluxo de trabalho:**", "**Status do Prompt:**", "**Resultado:**", "**Evidência do modelo:**", "**Autor:**",
    "**मूल:**", "**वर्कफ़्लो:**", "**प्रॉम्प्ट स्थिति:**", "**परिणाम:**", "**मॉडल प्रमाण:**", "**लेखक:**",
    "**由来:**", "**ワークフロー:**", "**プロンプトの状態:**", "**結果:**", "**モデルの根拠:**", "**作成者:**",
    "**원본:**", "**워크플로:**", "**프롬프트 상태:**", "**결과:**", "**모델 근거:**", "**작성자:**",
)

ENTRY_RE = re.compile(r"<!--\s*entry:(video-\d{3})\s*-->")
HEADING_RE = re.compile(r"^###\s+(\d+)\.(\d+)\.\s+(.+?)\s*$", re.MULTILINE)
FENCE_RE = re.compile(r"```text\n(.*?)\n```", re.DOTALL)
PLACEHOLDER_RE = re.compile(r"\{\{MEDIA_[A-Z0-9_]+\}\}")
OUTPUT_PLACEHOLDER_LINE_RE = re.compile(r"^\{\{MEDIA_VIDEO_(\d{3})\}\}$", re.MULTILINE)
ATTACHMENT_RE = re.compile(r"https://github\.com/user-attachments/assets/[0-9a-fA-F-]{36}")
ATTACHMENT_LINE_RE = re.compile(r"^https://github\.com/user-attachments/assets/[0-9a-fA-F-]{36}$", re.MULTILINE)
DATE_RE = re.compile(r"^<!-- updated:start -->.+?(\d{4}-\d{2}-\d{2})<!-- updated:end -->$", re.MULTILINE)


@dataclass(frozen=True)
class Entry:
    entry_id: str
    category: int
    item: int
    title: str
    body: str
    prompt: str
    source_line: str
    output_media: str
    media_tokens: tuple[str, ...]


def expected_numbering(entry_id: str) -> tuple[int, int]:
    number = int(entry_id[-3:])
    for category, first, last in CATEGORY_SPECS:
        if first <= number <= last:
            return category, number - first + 1
    raise ValueError(entry_id)


def parse_entries(path: Path, text: str, allow_placeholders: bool) -> list[Entry]:
    matches = list(ENTRY_RE.finditer(text))
    entries: list[Entry] = []
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        body = text[match.end():end]
        heading = HEADING_RE.search(body)
        prompt = FENCE_RE.search(body)
        source = next((line for line in body.splitlines() if line.startswith(SOURCE_LABELS[path.name]) and line.endswith("*")), "")
        attachment_lines = ATTACHMENT_LINE_RE.findall(body)
        placeholder_lines = OUTPUT_PLACEHOLDER_LINE_RE.findall(body)
        output = ""
        if allow_placeholders and placeholder_lines:
            output = f"{{{{MEDIA_VIDEO_{placeholder_lines[0]}}}}}"
        elif attachment_lines:
            output = attachment_lines[-1]
        media_tokens = tuple(sorted(PLACEHOLDER_RE.findall(body) + ATTACHMENT_RE.findall(body)))
        entries.append(Entry(
            match.group(1), int(heading.group(1)) if heading else -1, int(heading.group(2)) if heading else -1,
            heading.group(3).strip() if heading else "", body, prompt.group(1).strip() if prompt else "", source, output, media_tokens,
        ))
    return entries


def validate_gallery(root: Path = ROOT, allow_placeholders: bool = False) -> list[str]:
    errors: list[str] = []
    parsed: dict[str, list[Entry]] = {}
    dates: dict[str, str] = {}

    for name in README_NAMES:
        path = root / name
        if not path.exists():
            errors.append(f"missing {name}")
            continue
        if path.stat().st_size > MAX_README_BYTES:
            errors.append(f"{name}: exceeds {MAX_README_BYTES} bytes")
        text = path.read_text(encoding="utf-8")
        if LANGUAGE_NAV not in text:
            errors.append(f"{name}: multilingual navigation is missing or changed")
        date_match = DATE_RE.search(text)
        if not date_match:
            errors.append(f"{name}: visible update date is missing")
        else:
            dates[name] = date_match.group(1)
        if "# Awesome MiniMax H3 Prompts" not in text:
            errors.append(f"{name}: repository title is missing")
        first_entry = next((i for i, line in enumerate(text.splitlines(), 1) if "<!-- entry:video-001 -->" in line), None)
        if first_entry is None or first_entry > MAX_FIRST_ENTRY_LINE:
            errors.append(f"{name}: first entry must appear by line {MAX_FIRST_ENTRY_LINE}")
        for forbidden in FORBIDDEN_READER_UI:
            if forbidden in text:
                errors.append(f"{name}: forbidden reader-facing metadata {forbidden}")
        for category, _, _ in CATEGORY_SPECS:
            expected = f"## {category}. {CATEGORY_TITLES[name][category - 1]}"
            if text.count(expected) != 1:
                errors.append(f"{name}: category heading mismatch: {expected}")

        entries = parse_entries(path, text, allow_placeholders)
        parsed[name] = entries
        ids = tuple(entry.entry_id for entry in entries)
        if ids != EXPECTED_ENTRY_IDS:
            errors.append(f"{name}: entry IDs/order must be video-001 through video-020")
        for entry in entries:
            try:
                expected_category, expected_item = expected_numbering(entry.entry_id)
            except ValueError:
                errors.append(f"{name}: {entry.entry_id} is outside the supported entry range")
                continue
            if (entry.category, entry.item) != (expected_category, expected_item):
                errors.append(f"{name}: {entry.entry_id} has incorrect heading numbering")
            if not entry.title:
                errors.append(f"{name}: {entry.entry_id} is missing a title")
            if PROMPT_LABELS[name] not in entry.body or not entry.prompt:
                errors.append(f"{name}: {entry.entry_id} is missing its localized Prompt")
            if not entry.output_media:
                errors.append(f"{name}: {entry.entry_id} is missing a bare output video line")
            if allow_placeholders:
                expected = f"{{{{MEDIA_VIDEO_{entry.entry_id[-3:]}}}}}"
                if entry.output_media != expected:
                    errors.append(f"{name}: {entry.entry_id} must use {expected} before upload")
            elif PLACEHOLDER_RE.search(entry.body):
                errors.append(f"{name}: {entry.entry_id} still contains media placeholders")
            if not entry.source_line:
                errors.append(f"{name}: {entry.entry_id} is missing its source line")
            required_source = X_SOURCE if entry.entry_id == "video-016" else GUIDE_SOURCE
            if required_source not in entry.source_line:
                errors.append(f"{name}: {entry.entry_id} must cite its direct official source")

    if dates and len(set(dates.values())) != 1:
        errors.append("README update dates are not synchronized")

    if len(parsed) == len(README_NAMES):
        baseline = parsed["README.md"]
        baseline_media = [entry.media_tokens for entry in baseline]
        baseline_sources = [X_SOURCE if entry.entry_id == "video-016" else GUIDE_SOURCE for entry in baseline]
        for name in README_NAMES[1:]:
            entries = parsed[name]
            if [entry.media_tokens for entry in entries] != baseline_media:
                errors.append(f"{name}: media assignments differ from README.md")
            sources = [X_SOURCE if entry.entry_id == "video-016" else GUIDE_SOURCE for entry in entries]
            if sources != baseline_sources:
                errors.append(f"{name}: source assignments differ from README.md")
        if not allow_placeholders:
            outputs = [entry.output_media for entry in baseline]
            if len(outputs) != len(set(outputs)):
                errors.append("README.md: duplicate output attachment URLs")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--allow-placeholders", action="store_true", help="Permit exact upload-stage media placeholders.")
    args = parser.parse_args()
    errors = validate_gallery(ROOT, args.allow_placeholders)
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1
    mode = "upload preparation" if args.allow_placeholders else "publication"
    print(f"Gallery validation passed ({mode} mode): 6 README files, 20 synchronized entries.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
