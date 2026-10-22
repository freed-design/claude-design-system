#!/usr/bin/env bash
# Regenerate the Freed token CSS and specimen cards from the Figma file.
# Usage:  scripts/figma-sync/sync.sh [path/to/file.fig]
#         (default: the newest .fig in figma-references/)
# Needs:  python3 and the `zstd` command. Writes tokens/colors.css, theme.css, typography.css, assets/logos/*.svg, the Logo.jsx path data,
#         spacing.css, effects.css and guidelines/*.card.html. Intermediate files go to a temp folder.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
FIG="${1:-$(ls -t "$ROOT"/figma-references/*.fig | head -1)}"
FIG="$(cd "$(dirname "$FIG")" && pwd)/$(basename "$FIG")"
command -v zstd >/dev/null || { echo "zstd is required (brew install zstd)"; exit 1; }
WORK="$(mktemp -d)"; trap 'rm -rf "$WORK"' EXIT
export FREED_DS_ROOT="$ROOT"
export FIG_RELPATH="${FIG#$ROOT/}"
cd "$WORK"
echo "Reading $FIG_RELPATH"
python3 "$HERE/figkiwi.py" "$FIG"
python3 "$HERE/1_collect.py"
python3 "$HERE/2_colors_theme.py"
python3 "$HERE/3_type_layout.py"
python3 "$HERE/4_effects.py" >/dev/null
python3 "$HERE/5_specimen_cards.py"
python3 "$HERE/6_logos.py"
python3 "$HERE/7_variables.py"
echo "Done. Review the diff, then rebuild the bundle if component code changed: scripts/figma-sync/build-bundle.sh"
