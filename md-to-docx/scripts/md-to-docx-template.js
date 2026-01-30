/**
 * Markdown to DOCX Converter Template
 *
 * This is a template script. Claude will customize the colors, fonts, and sizes
 * based on the user's style choice (Professional, Fun, or Casual).
 *
 * Usage: node md-to-docx.js
 */

const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, PageNumber, LevelFormat,
        HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign,
        ExternalHyperlink, PageBreak } = require('docx');
const fs = require('fs');

// ============================================================================
// STYLE CONFIGURATION - Claude will set these based on user's choice
// ============================================================================

// PROFESSIONAL STYLE (default)
const colors = {
  primary: "000000",
  secondary: "000000",
  accent: "333333",
  text: "000000",
  muted: "666666",
  tableHeader: "f5f5f5",
  tableBorder: "cccccc",
  link: "000000"
};

const fonts = {
  title: "Calibri Light",
  heading: "Calibri Light",
  body: "Calibri"
};

const sizes = {
  title: 56,
  h1: 32,
  h2: 26,
  body: 22
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const br = () => new Paragraph({ children: [] });

function para(text) {
  return new Paragraph({ children: [new TextRun({ text, font: fonts.body, size: sizes.body, color: colors.text })] });
}

function paraBold(text) {
  return new Paragraph({ children: [new TextRun({ text, font: fonts.body, size: sizes.body, color: colors.text, bold: true })] });
}

function paraWithBold(boldText, normalText) {
  return new Paragraph({ children: [
    new TextRun({ text: boldText, font: fonts.body, size: sizes.body, color: colors.text, bold: true }),
    new TextRun({ text: normalText, font: fonts.body, size: sizes.body, color: colors.text })
  ]});
}

function paraItalic(text) {
  return new Paragraph({ children: [new TextRun({ text, font: fonts.body, size: sizes.body, color: colors.muted, italics: true })] });
}

function title(text) {
  return new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text, font: fonts.title, size: sizes.title, bold: true, color: colors.primary })] });
}

function h1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, font: fonts.heading, size: sizes.h1, bold: true, color: colors.secondary })] });
}

function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, font: fonts.heading, size: sizes.h2, bold: true, color: colors.accent })] });
}

function bullet(text) {
  return new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text, font: fonts.body, size: sizes.body, color: colors.text })] });
}

function numbered(text, ref = "numbers") {
  return new Paragraph({ numbering: { reference: ref, level: 0 }, children: [new TextRun({ text, font: fonts.body, size: sizes.body, color: colors.text })] });
}

function link(label, url) {
  return new Paragraph({ children: [
    new ExternalHyperlink({
      children: [new TextRun({ text: label, font: fonts.body, size: sizes.body, color: colors.link, underline: {} })],
      link: url
    })
  ]});
}

function linkInline(beforeText, linkText, url, afterText = "") {
  const children = [
    new TextRun({ text: beforeText, font: fonts.body, size: sizes.body, color: colors.text }),
    new ExternalHyperlink({
      children: [new TextRun({ text: linkText, font: fonts.body, size: sizes.body, color: colors.link, underline: {} })],
      link: url
    })
  ];
  if (afterText) {
    children.push(new TextRun({ text: afterText, font: fonts.body, size: sizes.body, color: colors.text }));
  }
  return new Paragraph({ children });
}

function createTable(headers, rows) {
  const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: colors.tableBorder };
  const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };
  const colWidth = Math.floor(9360 / headers.length);

  return new Table({
    columnWidths: headers.map(() => colWidth),
    rows: [
      new TableRow({ tableHeader: true, children: headers.map(h => new TableCell({
        borders: cellBorders, width: { size: colWidth, type: WidthType.DXA },
        shading: { fill: colors.tableHeader, type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: h, bold: true, font: fonts.body, size: sizes.body, color: colors.secondary })] })]
      })) }),
      ...rows.map(row => new TableRow({ children: row.map(cell => new TableCell({
        borders: cellBorders, width: { size: colWidth, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ indent: { left: 100 }, children: [new TextRun({ text: cell, font: fonts.body, size: sizes.body, color: colors.text })] })]
      })) }))
    ]
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ============================================================================
// DOCUMENT CREATION
// ============================================================================

const doc = new Document({
  styles: {
    default: { document: { run: { font: fonts.body, size: sizes.body } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: sizes.title, bold: true, color: colors.primary, font: fonts.title },
        paragraph: { spacing: { before: 0, after: 0 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: sizes.h1, bold: true, color: colors.secondary, font: fonts.heading },
        paragraph: { spacing: { before: 0, after: 0 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: sizes.h2, bold: true, color: colors.accent, font: fonts.heading },
        paragraph: { spacing: { before: 0, after: 0 }, outlineLevel: 1 } },
      { id: "BodyText", name: "Body Text", basedOn: "Normal",
        run: { size: sizes.body, color: colors.text, font: fonts.body },
        paragraph: { spacing: { before: 0, after: 0 } } }
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
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "HEADER_TEXT", font: fonts.body, size: 18, color: colors.muted })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Page ", font: fonts.body, size: 18, color: colors.muted }), new TextRun({ children: [PageNumber.CURRENT], font: fonts.body, size: 18, color: colors.muted })] })] }) },
    children: [
      // ========================================================================
      // DOCUMENT CONTENT - Claude will generate this from the markdown
      // ========================================================================

      // Example structure:
      // title("Document Title"),
      // br(),
      // paraItalic("Tagline or subtitle"),
      // br(),
      // br(),
      // para("Introduction paragraph..."),
      // br(),
      // h1("Section Heading"),
      // br(),
      // para("Section content..."),
      // br(),
      // bullet("First bullet point"),
      // bullet("Second bullet point"),
      // br(),
      // createTable(["Header 1", "Header 2"], [["Cell 1", "Cell 2"], ["Cell 3", "Cell 4"]]),
      // br(),
      // pageBreak(),
      // h1("Next Section"),
      // ...
    ]
  }]
});

// ============================================================================
// GENERATE FILE
// ============================================================================

const outputPath = "OUTPUT_FILENAME.docx";

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Document created: ${outputPath}`);
}).catch(err => console.error("Error:", err));
