#!/usr/bin/env bash
# Re-transpile Card, Icon, Tag, Button and Logo into _ds_bundle.js (the other components are carried over as they are).
# Needs node + npm; esbuild is installed into a temp folder, never into this repository.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
export FREED_DS_ROOT="$(cd "$HERE/../.." && pwd)"
WORK="$(mktemp -d)"; trap 'rm -rf "$WORK"' EXIT
(cd "$WORK" && npm init -y >/dev/null && npm install esbuild@0.24.0 --no-audit --no-fund >/dev/null)
cp "$HERE/build_bundle.mjs" "$WORK/" && node "$WORK/build_bundle.mjs"
