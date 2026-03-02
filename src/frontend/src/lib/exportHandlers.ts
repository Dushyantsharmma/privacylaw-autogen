import type { ClauseSection, MergedDocument } from "../types/documentTypes";

function documentToText(doc: MergedDocument): string {
  const lines: string[] = [];
  lines.push(doc.title.toUpperCase());
  lines.push(`Effective Date: ${doc.effectiveDate}`);
  lines.push(`Framework: ${doc.frameworkName}`);
  lines.push("");

  function renderSection(section: ClauseSection, depth = 0): void {
    const indent = "  ".repeat(depth);
    lines.push(`${indent}${section.title}`);
    lines.push("");
    lines.push(`${indent}${section.content}`);
    lines.push("");
    if (section.subsections) {
      for (const sub of section.subsections) {
        renderSection(sub, depth + 1);
      }
    }
  }

  for (const s of doc.sections) {
    renderSection(s);
  }
  return lines.join("\n");
}

function getEffectiveContent(section: ClauseSection): string {
  return section.isEdited && section.editedContent !== undefined
    ? section.editedContent
    : section.content;
}

function documentToTextWithEdits(doc: MergedDocument): string {
  const lines: string[] = [];
  lines.push(doc.title.toUpperCase());
  lines.push(`Effective Date: ${doc.effectiveDate}`);
  lines.push(`Framework: ${doc.frameworkName}`);
  lines.push("");

  function renderSection(section: ClauseSection, depth = 0): void {
    const indent = "  ".repeat(depth);
    lines.push(`${indent}${section.title}`);
    lines.push("");
    lines.push(`${indent}${getEffectiveContent(section)}`);
    lines.push("");
    if (section.subsections) {
      for (const sub of section.subsections) {
        renderSection(sub, depth + 1);
      }
    }
  }

  for (const s of doc.sections) {
    renderSection(s);
  }
  return lines.join("\n");
}

export async function copyToClipboard(doc: MergedDocument): Promise<void> {
  const text = documentToTextWithEdits(doc);
  await navigator.clipboard.writeText(text);
}

export function downloadTxt(doc: MergedDocument): void {
  const text = documentToTextWithEdits(doc);
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${doc.title.replace(/\s+/g, "-").toLowerCase()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadDoc(doc: MergedDocument): void {
  const html = `
    <html>
      <head>
        <meta charset="utf-8">
        <title>${doc.title}</title>
        <style>
          body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; margin: 2cm; }
          h1 { font-size: 18pt; text-align: center; margin-bottom: 12pt; }
          h2 { font-size: 14pt; margin-top: 18pt; margin-bottom: 6pt; }
          p { margin-bottom: 8pt; }
          .meta { color: #666; font-size: 10pt; text-align: center; margin-bottom: 24pt; }
        </style>
      </head>
      <body>
        <h1>${doc.title}</h1>
        <div class="meta">Effective Date: ${doc.effectiveDate} | Framework: ${doc.frameworkName}</div>
        ${doc.sections
          .map(
            (s) => `
          <h2>${s.title}</h2>
          <p>${getEffectiveContent(s).replace(/\n/g, "<br>")}</p>
          ${
            s.subsections
              ? s.subsections
                  .map(
                    (sub) => `
            <h3>${sub.title}</h3>
            <p>${getEffectiveContent(sub).replace(/\n/g, "<br>")}</p>
          `,
                  )
                  .join("")
              : ""
          }
        `,
          )
          .join("")}
      </body>
    </html>
  `;
  const blob = new Blob([html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${doc.title.replace(/\s+/g, "-").toLowerCase()}.doc`;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadPDF(doc: MergedDocument, logoDataUrl?: string): void {
  const logoHtml = logoDataUrl
    ? `<div style="text-align:center;margin-bottom:24pt;"><img src="${logoDataUrl}" style="max-height:80px;max-width:200px;" alt="Logo"/></div>`
    : "";

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${doc.title}</title>
        <style>
          @page { margin: 2cm; }
          body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; color: #000; }
          h1 { font-size: 18pt; text-align: center; margin-bottom: 6pt; }
          h2 { font-size: 13pt; margin-top: 16pt; margin-bottom: 4pt; border-bottom: 1px solid #ccc; padding-bottom: 2pt; }
          h3 { font-size: 11pt; margin-top: 10pt; }
          p { margin-bottom: 8pt; white-space: pre-wrap; }
          .meta { color: #555; font-size: 10pt; text-align: center; margin-bottom: 20pt; }
          .section { margin-bottom: 12pt; }
        </style>
      </head>
      <body>
        ${logoHtml}
        <h1>${doc.title}</h1>
        <div class="meta">Effective Date: ${doc.effectiveDate} | Framework: ${doc.frameworkName}</div>
        ${doc.sections
          .map(
            (s) => `
          <div class="section">
            <h2>${s.title}</h2>
            <p>${getEffectiveContent(s).replace(/\n/g, "<br>")}</p>
            ${
              s.subsections
                ? s.subsections
                    .map(
                      (sub) => `
              <h3>${sub.title}</h3>
              <p>${getEffectiveContent(sub).replace(/\n/g, "<br>")}</p>
            `,
                    )
                    .join("")
                : ""
            }
          </div>
        `,
          )
          .join("")}
      </body>
    </html>
  `;

  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
  if (iframeDoc) {
    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();
    setTimeout(() => {
      iframe.contentWindow?.print();
      setTimeout(() => document.body.removeChild(iframe), 1000);
    }, 500);
  }
}

export function generateMailtoLink(doc: MergedDocument): string {
  const subject = encodeURIComponent(`${doc.title} - ${doc.effectiveDate}`);
  const body = encodeURIComponent(
    `${documentToTextWithEdits(doc).substring(0, 2000)}\n\n[Full document available at your website]`,
  );
  return `mailto:?subject=${subject}&body=${body}`;
}

export { documentToText };
