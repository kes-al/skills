# DOCX-JS Quick Reference

Generate .docx files with JavaScript. This is a condensed reference for the md-to-docx skill.

## Setup

```javascript
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, PageNumber, LevelFormat,
        HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign,
        ExternalHyperlink, PageBreak } = require('docx');
const fs = require('fs');
```

## Document Structure

```javascript
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 56, bold: true, color: "000000", font: "Calibri Light" },
        paragraph: { spacing: { before: 0, after: 0 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "000000", font: "Calibri Light" },
        paragraph: { spacing: { before: 0, after: 0 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "333333", font: "Calibri" },
        paragraph: { spacing: { before: 0, after: 0 }, outlineLevel: 1 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Header", size: 18, color: "666666" })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Page ", size: 18, color: "666666" }), new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "666666" })] })] }) },
    children: [ /* content here */ ]
  }]
});
```

## Helper Functions

```javascript
// Empty line (use instead of spacing)
const br = () => new Paragraph({ children: [] });

// Regular paragraph
function para(text, colors, fonts) {
  return new Paragraph({ children: [new TextRun({ text, font: fonts.body, size: 22, color: colors.text })] });
}

// Bold paragraph
function paraBold(text, colors, fonts) {
  return new Paragraph({ children: [new TextRun({ text, font: fonts.body, size: 22, color: colors.text, bold: true })] });
}

// Paragraph with bold lead-in
function paraWithBold(boldText, normalText, colors, fonts) {
  return new Paragraph({ children: [
    new TextRun({ text: boldText, font: fonts.body, size: 22, color: colors.text, bold: true }),
    new TextRun({ text: normalText, font: fonts.body, size: 22, color: colors.text })
  ]});
}

// H1 heading
function h1(text, colors, fonts, sizes) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, font: fonts.heading, size: sizes.h1, bold: true, color: colors.secondary })] });
}

// H2 heading
function h2(text, colors, fonts, sizes) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, font: fonts.heading, size: sizes.h2, bold: true, color: colors.accent })] });
}

// Bullet item
function bullet(text, colors, fonts) {
  return new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text, font: fonts.body, size: 22, color: colors.text })] });
}

// Numbered item
function numbered(text, ref, colors, fonts) {
  return new Paragraph({ numbering: { reference: ref, level: 0 }, children: [new TextRun({ text, font: fonts.body, size: 22, color: colors.text })] });
}
```

## Tables

```javascript
function createTable(headers, rows, colors, fonts) {
  const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: colors.tableBorder };
  const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };
  const colWidth = Math.floor(9360 / headers.length);

  return new Table({
    columnWidths: headers.map(() => colWidth),
    rows: [
      new TableRow({ tableHeader: true, children: headers.map(h => new TableCell({
        borders: cellBorders, width: { size: colWidth, type: WidthType.DXA },
        shading: { fill: colors.tableHeader, type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: h, bold: true, font: fonts.body, size: 22, color: colors.secondary })] })]
      })) }),
      ...rows.map(row => new TableRow({ children: row.map(cell => new TableCell({
        borders: cellBorders, width: { size: colWidth, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ indent: { left: 100 }, children: [new TextRun({ text: cell, font: fonts.body, size: 22, color: colors.text })] })]
      })) }))
    ]
  });
}
```

## Links

```javascript
// External link
new Paragraph({ children: [
  new TextRun({ text: "Click here: ", font: "Calibri", size: 22, color: colors.text }),
  new ExternalHyperlink({
    children: [new TextRun({ text: "Link Text", font: "Calibri", size: 22, color: colors.link, underline: {} })],
    link: "https://example.com"
  })
]});
```

## Page Break

```javascript
new Paragraph({ children: [new PageBreak()] })
```

## Generate File

```javascript
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("output.docx", buffer);
  console.log("Document created");
}).catch(err => console.error("Error:", err));
```

## Critical Rules

1. **NEVER use spacing variables** — Always `spacing: { before: 0, after: 0 }`
2. **Use br() for line breaks** — Empty paragraphs, not spacing
3. **LevelFormat.BULLET** — Use the constant, not the string "bullet"
4. **ShadingType.CLEAR** — Always use for table cell shading
5. **No \n in text** — Use separate Paragraph elements
6. **TextRun in children** — Never use text property on Paragraph directly
