#!/usr/bin/env python3
"""Synchronize the six visible README update dates."""

from __future__ import annotations

import argparse
import re
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LABELS = {
    "README.md": "Last updated on {date}",
    "README.zh-CN.md": "最后更新于 {date}",
    "README.pt-BR.md": "Última atualização em {date}",
    "README.hi-IN.md": "अंतिम अपडेट: {date}",
    "README.ja-JP.md": "最終更新日：{date}",
    "README.ko-KR.md": "마지막 업데이트: {date}",
}
FIRST_LINE_RE = re.compile(r"^<!-- updated:start -->.*?<!-- updated:end -->$", re.MULTILINE)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--date", help="Override the date in YYYY-MM-DD form.")
    args = parser.parse_args()
    stamp = date.fromisoformat(args.date).isoformat() if args.date else date.today().isoformat()
    for name, label in LABELS.items():
        path = ROOT / name
        text = path.read_text(encoding="utf-8")
        updated, count = FIRST_LINE_RE.subn(
            "<!-- updated:start -->" + label.format(date=stamp) + "<!-- updated:end -->",
            text,
            count=1,
        )
        if count != 1:
            raise SystemExit(f"{name}: visible update line missing or duplicated")
        path.write_text(updated, encoding="utf-8")
        print(f"Updated {name} to {stamp}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
