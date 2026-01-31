#!/bin/bash
# MAKE SURE YOU CHANGE THE PATHS BELOW TO MATCH YOUR SETUP
# IT'LL BREAK IF YOU DON'T
# WARNED YOU

SOURCE="$HOME/Desktop/personal/code/skills"
CLAUDE_TARGET="$HOME/.claude/skills"
CODEX_TARGET="$HOME/.codex/skills"

if [ ! -d "$SOURCE" ]; then
  echo "Error: Source directory $SOURCE does not exist."
  exit 1
fi

mkdir -p "$HOME/.claude"
mkdir -p "$HOME/.codex"

for TARGET in "$CLAUDE_TARGET" "$CODEX_TARGET"; do
  if [ -e "$TARGET" ] || [ -L "$TARGET" ]; then
    echo "Removing existing $TARGET"
    rm -rf "$TARGET"
  fi
  ln -s "$SOURCE" "$TARGET"
  echo "Symlinked $TARGET -> $SOURCE"
done