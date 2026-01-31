brian, i couldn't figure out your skills repo in tag-ams =X

expected behavior: your local skills dir (wherever this repo lives) will be symlinked to ~/.claude/skills/ & ~/.codex/skills so you can keep this repo up to date and sync across computers

to use:
1) change the SOURCE directory path to wherever you clone this in the symlink-skills.sh file
2) run symlink-skills.sh
3) restart



```bash
#!/bin/bash
# MAKE SURE YOU CHANGE THE PATHS BELOW TO MATCH YOUR SETUP
# IT'LL BREAK IF YOU DON'T
# WARNED YOU

SOURCE="$HOME/Desktop/personal/code/skills" # CHANGE THIS PATH TO WHERE YOUR SKILLS FOLDER IS
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
```

general utils
- md-to-docx: i made this to convert ai generated markdown to nicely formatted word docs so i don't have to do it manually
- research: enables field selection -> deep research -> report

best practices
- vercel-best-practices: well, vercel best practices
- expo-*: for expo dev
- supabase-postgres-best-practices: not just for the mcp, but general postgres
- remotion-best-practices: haven't used it but the name also sounds good

testing
- ui-tester: functional testing for ui aside states
- test-driven-development: run this anytime you're focused on TDD (which should be always)

ui
- tag-brand-font-end: apply tag branding to ui
- building-native-ui: haven't used it but the name sounds good


