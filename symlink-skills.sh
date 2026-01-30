#!/bin/bash

SOURCE="$HOME/Desktop/personal/code/claude/skills"
TARGET="$HOME/.claude/skills"

if [ ! -d "$SOURCE" ]; then
  echo "Error: Source directory $SOURCE does not exist."
  exit 1
fi

mkdir -p "$HOME/.claude"

if [ -e "$TARGET" ] || [ -L "$TARGET" ]; then
  echo "Removing existing $TARGET"
  rm -rf "$TARGET"
fi

ln -s "$SOURCE" "$TARGET"
echo "Symlinked $TARGET -> $SOURCE"
