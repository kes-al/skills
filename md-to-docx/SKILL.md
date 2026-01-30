---
name: md-to-docx
description: "Convert markdown files to professionally formatted .docx documents with automatic structure detection. Use when the user wants to convert a markdown file (.md) to a Word document (.docx), or asks to 'make this a Word doc', 'convert to docx', 'format this as a document', or similar requests involving markdown-to-Word conversion."
---

# Markdown to DOCX Converter

Convert markdown files to professionally formatted Word documents with automatic structure detection.

## Workflow

### Step 1: Ask for Document Style

Before starting conversion, ask the user what style they want using AskUserQuestion:

**Question:** "What style should this document have?"

**Options:**
- **Professional** — Clean black text, Calibri fonts, subtle gray accents. Best for business proposals, reports, formal documents.
- **Fun** — Vibrant colors (coral, teal, purple), playful Poppins font. Best for creative briefs, casual presentations, internal team docs.
- **Casual** — Warm earth tones (slate blue, warm gray), friendly Georgia font. Best for newsletters, personal documents, informal reports.

### Step 2: Read and Analyze the Markdown

1. Read the markdown file
2. Identify structure:
   - Title (first H1)
   - Headings (H1, H2, H3)
   - Paragraphs
   - Bullet lists
   - Numbered lists
   - Tables
   - Bold/italic text
   - Links
   - Horizontal rules (`---` or `<hr>`) — these will be REMOVED
3. Track what will be changed/removed for the summary

### Step 3: Generate the DOCX

Use the docx-js library. Read [docx-js-reference.md](docx-js-reference.md) for the API.

**Critical formatting rules:**
- **NEVER use spacing variables** — Set `spacing: { before: 0, after: 0 }` on ALL paragraph styles
- **Use empty paragraphs for line breaks** — Create a `br()` helper that returns `new Paragraph({ children: [] })`
- **NEVER delete content** — Only remove formatting elements like `<hr>`
- **Use proper Word lists** — Use `LevelFormat.BULLET` for bullets, never unicode symbols

### Step 4: Provide Summary

After generating the document, provide a summary:

```
## Conversion Summary

**Document:** [filename].docx
**Style:** [Professional/Fun/Casual]

### Structure Detected
- Title: [title text]
- Sections: [count] H1 headings
- Subsections: [count] H2 headings
- Paragraphs: [count]
- Bullet lists: [count]
- Numbered lists: [count]
- Tables: [count]
- Links: [count]

### Changes Made
- Removed [count] horizontal rules (<hr>)
- [any other formatting changes]

### Content Preserved
All original text content has been preserved. No deletions.
```

## Style Configurations

### Professional Style

```javascript
const colors = {
  primary: "000000",      // Black for titles
  secondary: "000000",    // Black for H1
  accent: "333333",       // Dark gray for H2
  text: "000000",         // Black body text
  muted: "666666",        // Gray for subtle text
  tableHeader: "f5f5f5",  // Light gray table headers
  tableBorder: "cccccc",  // Gray borders
  link: "000000"          // Black links (underlined)
};

const fonts = {
  title: "Calibri Light",
  heading: "Calibri Light",
  body: "Calibri"
};

const sizes = {
  title: 56,    // 28pt
  h1: 32,       // 16pt
  h2: 26,       // 13pt
  body: 22      // 11pt
};
```

### Fun Style

```javascript
const colors = {
  primary: "e63946",      // Coral red for titles
  secondary: "2a9d8f",    // Teal for H1
  accent: "9b5de5",       // Purple for H2
  text: "264653",         // Dark teal body text
  muted: "6c757d",        // Gray for subtle text
  tableHeader: "f8f9fa",  // Light background
  tableBorder: "dee2e6",  // Soft borders
  link: "e63946"          // Coral links
};

const fonts = {
  title: "Poppins",
  heading: "Poppins",
  body: "Poppins"
};

const sizes = {
  title: 60,    // 30pt
  h1: 36,       // 18pt
  h2: 28,       // 14pt
  body: 22      // 11pt
};
```

### Casual Style

```javascript
const colors = {
  primary: "4a5568",      // Slate for titles
  secondary: "2d3748",    // Dark slate for H1
  accent: "718096",       // Medium slate for H2
  text: "4a5568",         // Slate body text
  muted: "a0aec0",        // Light slate for subtle
  tableHeader: "edf2f7",  // Very light slate
  tableBorder: "cbd5e0",  // Light borders
  link: "3182ce"          // Friendly blue links
};

const fonts = {
  title: "Georgia",
  heading: "Georgia",
  body: "Georgia"
};

const sizes = {
  title: 52,    // 26pt
  h1: 32,       // 16pt
  h2: 26,       // 13pt
  body: 24      // 12pt
};
```

## Script Template

See [scripts/md-to-docx.js](scripts/md-to-docx.js) for the base conversion script. Customize the `colors`, `fonts`, and `sizes` objects based on the user's style choice.

## Important Rules

1. **Zero spacing** — All `spacing: { before: 0, after: 0 }` always
2. **Hard breaks** — Use `br()` empty paragraphs for visual separation
3. **No content deletion** — NEVER remove text, only formatting elements
4. **Kill `<hr>`** — Remove all horizontal rules, track count for summary
5. **Proper lists** — Use `LevelFormat.BULLET` and `LevelFormat.DECIMAL`
6. **Summary required** — Always end with conversion summary
