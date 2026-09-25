from __future__ import annotations

import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "check_gallery", ROOT / "scripts" / "check_gallery.py"
)
assert SPEC and SPEC.loader
CHECK = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = CHECK
SPEC.loader.exec_module(CHECK)

LOCALES = {
    "en": CHECK.README_EN,
    "zh": CHECK.README_ZH,
    "pt": CHECK.README_PT,
    "hi": CHECK.README_HI,
    "ja": CHECK.README_JA,
    "ko": CHECK.README_KO,
}
DATES = {
    "en": "<!-- updated:start -->Last updated on 2026-07-28<!-- updated:end -->",
    "zh": "<!-- updated:start -->最后更新于 2026-07-28<!-- updated:end -->",
    "pt": (
        "<!-- updated:start -->Última atualização em "
        "2026-07-28<!-- updated:end -->"
    ),
    "hi": "<!-- updated:start -->अंतिम अपडेट: 2026-07-28<!-- updated:end -->",
    "ja": "<!-- updated:start -->最終更新日：2026-07-28<!-- updated:end -->",
    "ko": "<!-- updated:start -->마지막 업데이트: 2026-07-28<!-- updated:end -->",
}
PROMPTS = {
    "en": "This is localized English prompt number {number} for validation.",
    "zh": "这是第 {number} 条用于测试的本地化中文提示词。",
    "pt": (
        "Este é um prompt em português brasileiro número {number} "
        "para validação."
    ),
    "hi": "यह सत्यापन के लिए स्थानीयकृत हिन्दी प्रॉम्प्ट संख्या {number} है।",
    "ja": "これは検証用に日本語へローカライズした第 {number} 件目のプロンプトです。",
    "ko": "이것은 검증을 위해 한국어로 현지화한 {number}번째 프롬프트입니다.",
}
TITLES = {
    "en": "Case {number}",
    "zh": "案例 {number}",
    "pt": "Caso {number}",
    "hi": "उदाहरण {number}",
    "ja": "事例 {number}",
    "ko": "사례 {number}",
}
SOURCE_TERMS = {
    "en": ("Source", "Post", "ByteDance · Volcano Ark", "Official preview"),
    "zh": ("来源", "原帖", "ByteDance · 火山方舟", "官方预览"),
    "pt": ("Fonte", "Publicação", "ByteDance · Volcano Ark", "Prévia oficial"),
    "hi": ("स्रोत", "पोस्ट", "ByteDance · Volcano Ark", "आधिकारिक प्रीव्यू"),
    "ja": ("出典", "投稿", "ByteDance · Volcano Ark", "公式プレビュー"),
    "ko": ("출처", "게시물", "ByteDance · Volcano Ark", "공식 미리보기"),
}


def numbering(number: int) -> tuple[int, int]:
    for category, first, last in CHECK.CATEGORY_SPECS:
        if first <= number <= last:
            return category, number - first + 1
    raise AssertionError(number)


def attachment(number: int) -> str:
    return (
        "https://github.com/user-attachments/assets/"
        f"00000000-0000-4000-8000-{number:012d}"
    )


def make_entry(
    number: int,
    locale: str = "en",
    placeholder: bool = False,
) -> str:
    entry_id = f"video-{number:03d}"
    category, item = numbering(number)
    canonical = LOCALES[locale]
    prompt = PROMPTS[locale].format(number=number)
    media = f"{{{{MEDIA_VIDEO_{number:03d}}}}}" if placeholder else attachment(number)
    source_label, post_label, official_name, official_label = SOURCE_TERMS[locale]
    label_colon = "：" if locale in {"zh", "ja"} else ":"
    if entry_id in CHECK.COMMUNITY_ENTRY_IDS:
        source = (
            f"*{source_label}{label_colon} Author "
            f"([@author{number}](https://x.com/author{number})) — "
            f"[{post_label}]"
            f"(https://x.com/author{number}/status/"
            f"{2000000000000000000 + number})*"
        )
    else:
        source = (
            f"*{source_label}{label_colon} {official_name} — "
            f"[{official_label}]({CHECK.OFFICIAL_SOURCE})*"
        )
    title = TITLES[locale].format(number=number)
    return f"""<!-- entry:{entry_id} -->
<a id="{entry_id}"></a>

### {category}.{item}. {title}

*Description.*

{CHECK.PROMPT_LABELS[canonical]}

```text
{prompt}
```

{media}

{source}
"""


def make_readme(
    count: int = 20,
    locale: str = "en",
    placeholder: bool = False,
) -> str:
    canonical = LOCALES[locale]
    pieces = [
        DATES[locale],
        "",
        "# Awesome Seedance 2.5 Prompts 🎬",
        "",
        CHECK.LANGUAGE_NAV,
        "",
    ]
    for category, first, last in CHECK.CATEGORY_SPECS:
        pieces.extend(
            [
                f"## {category}. {CHECK.CATEGORY_TITLES[canonical][category - 1]}",
                "",
                "*Category description.*",
                "",
            ]
        )
        for number in range(first, min(last, count) + 1):
            pieces.append(make_entry(number, locale, placeholder))
    return "\n".join(pieces)


class GalleryValidationTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        (self.root / ".gitignore").write_text(
            ".media-upload/\n.reference/\n",
            encoding="utf-8",
        )
        for locale, canonical in LOCALES.items():
            (self.root / canonical.name).write_text(
                make_readme(locale=locale),
                encoding="utf-8",
            )

    def tearDown(self) -> None:
        self.temp.cleanup()

    def errors(self, allow_placeholders: bool = False) -> list[str]:
        return CHECK.validate_gallery(self.root, allow_placeholders)

    def replace_all(self, old: str, new: str) -> None:
        for canonical in LOCALES.values():
            path = self.root / canonical.name
            path.write_text(
                path.read_text(encoding="utf-8").replace(old, new),
                encoding="utf-8",
            )

    def test_valid_multilingual_gallery(self) -> None:
        self.assertEqual([], self.errors())

    def test_rejects_missing_language_readme(self) -> None:
        (self.root / CHECK.README_HI.name).unlink()
        self.assertTrue(
            any(f"missing {CHECK.README_HI.name}" in error for error in self.errors())
        )

    def test_rejects_missing_japanese_readme(self) -> None:
        (self.root / CHECK.README_JA.name).unlink()
        self.assertTrue(
            any(f"missing {CHECK.README_JA.name}" in error for error in self.errors())
        )

    def test_rejects_missing_korean_readme(self) -> None:
        (self.root / CHECK.README_KO.name).unlink()
        self.assertTrue(
            any(f"missing {CHECK.README_KO.name}" in error for error in self.errors())
        )

    def test_rejects_multilingual_navigation_drift(self) -> None:
        path = self.root / CHECK.README_PT.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                CHECK.LANGUAGE_NAV,
                "| [English](README.md) |\n|:---:|",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("multilingual navigation" in error for error in self.errors())
        )

    def test_rejects_multilingual_update_date_drift(self) -> None:
        path = self.root / CHECK.README_HI.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "अंतिम अपडेट: 2026-07-28",
                "अंतिम अपडेट: 2026-07-27",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("multilingual update dates differ" in error for error in self.errors())
        )

    def test_rejects_japanese_update_date_drift(self) -> None:
        path = self.root / CHECK.README_JA.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "最終更新日：2026-07-28",
                "最終更新日：2026-07-27",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("multilingual update dates differ" in error for error in self.errors())
        )

    def test_rejects_korean_update_date_drift(self) -> None:
        path = self.root / CHECK.README_KO.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "마지막 업데이트: 2026-07-28",
                "마지막 업데이트: 2026-07-27",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("multilingual update dates differ" in error for error in self.errors())
        )

    def test_rejects_fewer_than_twenty_entries(self) -> None:
        (self.root / CHECK.README_EN.name).write_text(
            make_readme(19),
            encoding="utf-8",
        )
        self.assertTrue(any("expected 20 entries" in error for error in self.errors()))

    def test_accepts_localized_prompt_differences(self) -> None:
        path = self.root / CHECK.README_ZH.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "这是第 7 条用于测试的本地化中文提示词。",
                "这是第 7 条经过润色的本地化中文提示词。",
            ),
            encoding="utf-8",
        )
        self.assertEqual([], self.errors())

    def test_rejects_unlocalized_chinese_prompt(self) -> None:
        path = self.root / CHECK.README_ZH.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "这是第 7 条用于测试的本地化中文提示词。",
                "This prompt was accidentally left in English.",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any(
                "not localized into Simplified Chinese" in error
                for error in self.errors()
            )
        )

    def test_rejects_unlocalized_english_prompt(self) -> None:
        path = self.root / CHECK.README_EN.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "This is localized English prompt number 7 for validation.",
                "这条提示词不应留在英文版中。",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("not localized into English" in error for error in self.errors())
        )

    def test_rejects_unlocalized_portuguese_prompt(self) -> None:
        path = self.root / CHECK.README_PT.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                PROMPTS["pt"].format(number=7),
                "This prompt was accidentally left in English.",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any(
                "not localized into Brazilian Portuguese" in error
                for error in self.errors()
            )
        )

    def test_rejects_unlocalized_hindi_prompt(self) -> None:
        path = self.root / CHECK.README_HI.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                PROMPTS["hi"].format(number=7),
                "This prompt was accidentally left in English.",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("not localized into Hindi" in error for error in self.errors())
        )

    def test_rejects_unlocalized_japanese_prompt(self) -> None:
        path = self.root / CHECK.README_JA.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                PROMPTS["ja"].format(number=7),
                "This prompt was accidentally left in English.",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("not localized into Japanese" in error for error in self.errors())
        )

    def test_rejects_unlocalized_korean_prompt(self) -> None:
        path = self.root / CHECK.README_KO.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                PROMPTS["ko"].format(number=7),
                "This prompt was accidentally left in English.",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("not localized into Korean" in error for error in self.errors())
        )

    def test_rejects_japanese_prompt_in_english_readme(self) -> None:
        path = self.root / CHECK.README_EN.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                PROMPTS["en"].format(number=7),
                PROMPTS["ja"].format(number=7),
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("not localized into English" in error for error in self.errors())
        )

    def test_rejects_korean_prompt_in_english_readme(self) -> None:
        path = self.root / CHECK.README_EN.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                PROMPTS["en"].format(number=7),
                PROMPTS["ko"].format(number=7),
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("not localized into English" in error for error in self.errors())
        )

    def test_rejects_multilingual_media_drift(self) -> None:
        path = self.root / CHECK.README_PT.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                attachment(7),
                attachment(8),
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any(
                "multilingual drift in README.pt-BR.md at video-007" in error
                for error in self.errors()
            )
        )

    def test_rejects_multilingual_source_drift(self) -> None:
        path = self.root / CHECK.README_HI.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "https://x.com/author4/status/2000000000000000004",
                "https://x.com/author4/status/2000000000000000999",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any(
                "multilingual drift in README.hi-IN.md at video-004" in error
                for error in self.errors()
            )
        )

    def test_rejects_japanese_media_drift(self) -> None:
        path = self.root / CHECK.README_JA.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                attachment(7),
                attachment(8),
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any(
                "multilingual drift in README.ja-JP.md at video-007" in error
                for error in self.errors()
            )
        )

    def test_rejects_korean_source_drift(self) -> None:
        path = self.root / CHECK.README_KO.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "https://x.com/author4/status/2000000000000000004",
                "https://x.com/author4/status/2000000000000000999",
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any(
                "multilingual drift in README.ko-KR.md at video-004" in error
                for error in self.errors()
            )
        )

    def test_rejects_duplicate_attachment(self) -> None:
        self.replace_all(attachment(2), attachment(1))
        self.assertTrue(any("duplicate video" in error for error in self.errors()))

    def test_rejects_linked_thumbnail_instead_of_native_video(self) -> None:
        replacement = (
            '<a href="https://media.example/video.mp4">'
            '<img src="https://media.example/poster.jpg"></a>'
        )
        self.replace_all(attachment(3), replacement)
        errors = self.errors()
        self.assertTrue(any("native video line" in error for error in errors))
        self.assertTrue(any("linked thumbnails" in error for error in errors))

    def test_rejects_retired_reader_metadata(self) -> None:
        self.replace_all(
            "*Description.*",
            "*Description.*\n\n**Model evidence:** Internal evidence",
        )
        self.assertTrue(
            any("retired reader-facing metadata" in error for error in self.errors())
        )

    def test_rejects_reader_facing_partial_prompt_status(self) -> None:
        path = self.root / CHECK.README_EN.name
        path.write_text(
            path.read_text(encoding="utf-8").replace(
                "**Prompt:**",
                "**Prompt (published request text; partial):**",
                1,
            ),
            encoding="utf-8",
        )
        self.assertTrue(
            any("retired reader-facing metadata" in error for error in self.errors())
        )

    def test_rejects_non_direct_community_source(self) -> None:
        self.replace_all(
            "https://x.com/author4/status/2000000000000000004",
            "https://example.com/repost",
        )
        self.assertTrue(any("direct X status" in error for error in self.errors()))

    def test_rejects_wrong_category_numbering(self) -> None:
        self.replace_all("### 2.1. Case 5", "### 1.5. Case 5")
        self.assertTrue(any("expected heading 2.1" in error for error in self.errors()))

    def test_placeholder_mode_is_explicit(self) -> None:
        for locale, canonical in LOCALES.items():
            (self.root / canonical.name).write_text(
                make_readme(locale=locale, placeholder=True),
                encoding="utf-8",
            )
        self.assertTrue(any("placeholder remains" in error for error in self.errors()))
        self.assertEqual([], self.errors(allow_placeholders=True))

    def test_rejects_first_entry_after_line_45(self) -> None:
        self.replace_all(
            "<!-- entry:video-001 -->",
            ("\n" * 50) + "<!-- entry:video-001 -->",
        )
        self.assertTrue(any("first entry starts" in error for error in self.errors()))

    def test_rejects_broken_anchor(self) -> None:
        self.replace_all(
            '<a id="video-004"></a>',
            '<a id="video-broken"></a>',
        )
        self.assertTrue(any("matching anchor" in error for error in self.errors()))

    def test_rejects_image_output_marker(self) -> None:
        for canonical in LOCALES.values():
            path = self.root / canonical.name
            path.write_text(
                path.read_text(encoding="utf-8")
                + "\n<!-- entry:image-001 -->\n",
                encoding="utf-8",
            )
        self.assertTrue(any("video-only" in error for error in self.errors()))


if __name__ == "__main__":
    unittest.main()
