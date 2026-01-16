#!/bin/bash

set -e

if [ $# -ne 2 ]; then
  echo "Usage: $0 <width> <height>"
  exit 1
fi

W="$1"
H="$2"

if [ ! -d "out" ]; then
  mkdir out
fi

for f in *.webp; do
  [ -e "$f" ] || continue
  base="${f%.*}"
  ext="${f##*.}"
  ffmpeg -hide_banner -loglevel error -y \
    -i "$f" \
    -vf "scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H}" \
    "out/${base}.webp"
done