# Style Configurations

Copy-paste these configurations based on the user's style choice.

## Professional

Clean, formal, all black. Best for business proposals, reports, formal documents.

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

## Fun

Vibrant, playful colors. Best for creative briefs, casual presentations, internal team docs.

```javascript
const colors = {
  primary: "e63946",      // Coral red for titles
  secondary: "2a9d8f",    // Teal for H1
  accent: "9b5de5",       // Purple for H2
  text: "264653",         // Dark teal body text
  muted: "6c757d",        // Gray for subtle text
  tableHeader: "fff3cd",  // Warm yellow table headers
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

**Note:** Poppins may not be installed on all systems. Fallback to "Segoe UI" if needed.

## Casual

Warm, friendly, approachable. Best for newsletters, personal documents, informal reports.

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

## Adding New Styles

To add a new style, create a new section with:
- `colors` object with all 8 color keys
- `fonts` object with title, heading, body
- `sizes` object with title, h1, h2, body

Keep fonts to universally available options when possible:
- **Sans-serif:** Calibri, Arial, Segoe UI, Verdana
- **Serif:** Georgia, Times New Roman, Cambria
- **Display:** Poppins (if installed), Impact
