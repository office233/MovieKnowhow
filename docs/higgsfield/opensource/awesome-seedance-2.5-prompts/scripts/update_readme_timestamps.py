#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Synchronize the visible multilingual README update dates."""

from __future__ import annotations

import argparse
import re
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
README_LABELS = {
    "README.md": "Last updated on {date}",
    "README.zh-CN.md": "最后更新于 {date}",
    "README.pt-BR.md": "Última atualização em {date}",
    "README.hi-IN.md": "अंतिम अपडेट: {date}",
    "README.ja-JP.md": "最終更新日：{date}",
    "README.ko-KR.md": "마지막 업데이트: {date}",
}
PATTERN = re.compile(
    r"<!-- updated:start -->.*?<!-- updated:end -->",
    re.DOTALL,
)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--date", help="Override date in YYYY-MM-DD format.")
    args = parser.parse_args()
    stamp = date.fromisoformat(args.date).isoformat() if args.date else date.today().isoformat()
    for name, template in README_LABELS.items():
        path = ROOT / name
        text = path.read_text(encoding="utf-8")
        replacement = (
            "<!-- updated:start -->"
            f"{template.format(date=stamp)}"
            "<!-- updated:end -->"
        )
        updated, count = PATTERN.subn(replacement, text, count=1)
        if count != 1:
            raise SystemExit(f"{name}: update marker missing or duplicated")
        path.write_text(updated, encoding="utf-8")
        print(f"Updated {name} to {stamp}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
