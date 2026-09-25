from __future__ import annotations

import csv
import importlib.util
import shutil
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("check_gallery", ROOT / "scripts" / "check_gallery.py")
assert SPEC and SPEC.loader
CHECK = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = CHECK
SPEC.loader.exec_module(CHECK)


class GalleryValidationTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        for name in CHECK.README_NAMES:
            shutil.copyfile(ROOT / name, self.root / name)
        with (ROOT / ".media-upload" / "attachment-map.tsv").open(encoding="utf-8", newline="") as handle:
            self.media = {row["placeholder"]: row["github_url"] for row in csv.DictReader(handle, delimiter="\t")}

    def tearDown(self) -> None:
        self.temp.cleanup()

    def errors(self, allow_placeholders: bool = False) -> list[str]:
        return CHECK.validate_gallery(self.root, allow_placeholders)

    def edit(self, name: str, old: str, new: str) -> None:
        path = self.root / name
        path.write_text(path.read_text(encoding="utf-8").replace(old, new, 1), encoding="utf-8")

    def placeholder_all(self) -> None:
        for name in CHECK.README_NAMES:
            path = self.root / name
            text = path.read_text(encoding="utf-8")
            for token, url in self.media.items():
                text = text.replace(url, "{{" + token + "}}")
            path.write_text(text, encoding="utf-8")

    def test_valid_placeholder_gallery(self) -> None:
        self.placeholder_all()
        self.assertEqual([], self.errors(True))

    def test_valid_published_gallery(self) -> None:
        self.assertEqual([], self.errors(False))

    def test_strict_mode_rejects_placeholders(self) -> None:
        self.placeholder_all()
        self.assertTrue(any("still contains media placeholders" in error for error in self.errors(False)))

    def test_missing_readme(self) -> None:
        (self.root / "README.hi-IN.md").unlink()
        self.assertIn("missing README.hi-IN.md", self.errors())

    def test_navigation_drift(self) -> None:
        self.edit("README.pt-BR.md", CHECK.LANGUAGE_NAV, "[English](README.md)")
        self.assertTrue(any("multilingual navigation" in error for error in self.errors()))

    def test_date_drift(self) -> None:
        self.edit("README.ko-KR.md", "2026-07-31", "2026-07-30")
        self.assertTrue(any("dates are not synchronized" in error for error in self.errors()))

    def test_first_entry_too_late(self) -> None:
        self.edit("README.md", "<!-- entry:video-001 -->", ("padding\n" * 20) + "<!-- entry:video-001 -->")
        self.assertTrue(any("first entry" in error for error in self.errors()))

    def test_entry_order_drift(self) -> None:
        self.edit("README.zh-CN.md", "entry:video-020", "entry:video-099")
        self.assertTrue(any("entry IDs/order" in error for error in self.errors()))

    def test_heading_number_drift(self) -> None:
        self.edit("README.ja-JP.md", "### 3.1.", "### 3.9.")
        self.assertTrue(any("incorrect heading numbering" in error for error in self.errors()))

    def test_missing_prompt(self) -> None:
        self.edit("README.md", "**Prompt:**", "**Request:**")
        self.assertTrue(any("missing its localized Prompt" in error for error in self.errors()))

    def test_wrong_output_placeholder(self) -> None:
        self.placeholder_all()
        self.edit("README.ko-KR.md", "{{MEDIA_VIDEO_007}}", "{{MEDIA_VIDEO_999}}")
        self.assertTrue(any("must use {{MEDIA_VIDEO_007}}" in error for error in self.errors(True)))

    def test_wrong_official_source(self) -> None:
        self.edit("README.md", CHECK.GUIDE_SOURCE, "https://example.com/unverified")
        self.assertTrue(any("must cite its direct official source" in error for error in self.errors()))

    def test_cross_language_media_drift(self) -> None:
        self.edit("README.hi-IN.md", self.media["MEDIA_IMAGE_001_01"], "https://github.com/user-attachments/assets/00000000-0000-4000-8000-999999999999")
        self.assertTrue(any("media assignments differ" in error for error in self.errors()))

    def test_forbidden_internal_metadata(self) -> None:
        self.edit("README.md", "**Prompt:**", "**Origin:** official\n\n**Prompt:**")
        self.assertTrue(any("forbidden reader-facing metadata" in error for error in self.errors()))

    def test_duplicate_published_output(self) -> None:
        first_url = self.media["MEDIA_VIDEO_001"]
        second_url = self.media["MEDIA_VIDEO_002"]
        for name in CHECK.README_NAMES:
            self.edit(name, second_url, first_url)
        self.assertTrue(any("duplicate output attachment URLs" in error for error in self.errors(False)))


if __name__ == "__main__":
    unittest.main()
