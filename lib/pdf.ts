import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { deflateSync, inflateSync } from "node:zlib";

type PdfColor = [number, number, number];

const colors = {
  ink: [0.09, 0.09, 0.11] as PdfColor,
  muted: [0.42, 0.44, 0.5] as PdfColor,
  paper: [0.98, 0.98, 0.97] as PdfColor,
  soft: [0.95, 0.96, 0.97] as PdfColor,
  line: [0.88, 0.88, 0.9] as PdfColor,
  dark: [0.03, 0.03, 0.04] as PdfColor,
  green: [0.05, 0.62, 0.36] as PdfColor,
  red: [0.82, 0.16, 0.22] as PdfColor,
  amber: [0.74, 0.48, 0.12] as PdfColor,
  white: [1, 1, 1] as PdfColor,
};

type PngImage = {
  width: number;
  height: number;
  rgb: Buffer;
  alpha?: Buffer;
};

let receiptLogo: PngImage | null | undefined;

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(value: string, maxLength = 58) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length > maxLength && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = nextLine;
    }
  });

  if (currentLine) lines.push(currentLine);

  return lines;
}

function rgb(color: PdfColor) {
  return `${color[0]} ${color[1]} ${color[2]}`;
}

function asciiHex(buffer: Buffer) {
  return `${buffer.toString("hex").toUpperCase()}>`;
}

function rect(x: number, y: number, width: number, height: number, color: PdfColor) {
  return `q ${rgb(color)} rg ${x} ${y} ${width} ${height} re f Q`;
}

function strokeRect(
  x: number,
  y: number,
  width: number,
  height: number,
  color: PdfColor,
  lineWidth = 1
) {
  return `q ${lineWidth} w ${rgb(color)} RG ${x} ${y} ${width} ${height} re S Q`;
}

function strokeLine(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: PdfColor,
  lineWidth = 1
) {
  return `q ${lineWidth} w ${rgb(color)} RG ${fromX} ${fromY} m ${toX} ${toY} l S Q`;
}

function text(
  x: number,
  y: number,
  value: string,
  size = 10,
  color: PdfColor = colors.ink,
  font = "F1"
) {
  return [
    "q",
    `${rgb(color)} rg`,
    "BT",
    `/${font} ${size} Tf`,
    `1 0 0 1 ${x} ${y} Tm`,
    `(${escapePdfText(value)}) Tj`,
    "ET",
    "Q",
  ].join("\n");
}

function image(x: number, y: number, width: number, height: number, name = "Logo") {
  return `q ${width} 0 0 ${height} ${x} ${y} cm /${name} Do Q`;
}

function paethPredictor(left: number, above: number, upperLeft: number) {
  const estimate = left + above - upperLeft;
  const leftDistance = Math.abs(estimate - left);
  const aboveDistance = Math.abs(estimate - above);
  const upperLeftDistance = Math.abs(estimate - upperLeft);

  if (leftDistance <= aboveDistance && leftDistance <= upperLeftDistance) return left;
  if (aboveDistance <= upperLeftDistance) return above;

  return upperLeft;
}

function decodePng(buffer: Buffer): PngImage {
  const signature = "89504e470d0a1a0a";

  if (buffer.subarray(0, 8).toString("hex") !== signature) {
    throw new Error("Invalid PNG signature");
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  let interlace = 0;
  const idatChunks: Buffer[] = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.subarray(offset + 4, offset + 8).toString("ascii");
    const data = buffer.subarray(offset + 8, offset + 8 + length);

    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    } else if (type === "IDAT") {
      idatChunks.push(data);
    } else if (type === "IEND") {
      break;
    }

    offset += length + 12;
  }

  if (bitDepth !== 8 || interlace !== 0) {
    throw new Error("Unsupported PNG format");
  }

  const channelCountByColorType: Record<number, number> = {
    0: 1,
    2: 3,
    4: 2,
    6: 4,
  };
  const channels = channelCountByColorType[colorType];

  if (!channels || width <= 0 || height <= 0 || idatChunks.length === 0) {
    throw new Error("Unsupported PNG color type");
  }

  const inflated = inflateSync(Buffer.concat(idatChunks));
  const rowLength = width * channels;
  const pixels = Buffer.alloc(rowLength * height);
  let sourceOffset = 0;
  let targetOffset = 0;
  let previousRow = Buffer.alloc(rowLength);

  for (let row = 0; row < height; row += 1) {
    const filter = inflated[sourceOffset];
    sourceOffset += 1;
    const currentRow = Buffer.from(inflated.subarray(sourceOffset, sourceOffset + rowLength));
    sourceOffset += rowLength;

    for (let index = 0; index < rowLength; index += 1) {
      const left = index >= channels ? currentRow[index - channels] : 0;
      const above = previousRow[index] ?? 0;
      const upperLeft = index >= channels ? previousRow[index - channels] ?? 0 : 0;

      if (filter === 1) currentRow[index] = (currentRow[index] + left) & 255;
      if (filter === 2) currentRow[index] = (currentRow[index] + above) & 255;
      if (filter === 3) {
        currentRow[index] = (currentRow[index] + Math.floor((left + above) / 2)) & 255;
      }
      if (filter === 4) {
        currentRow[index] =
          (currentRow[index] + paethPredictor(left, above, upperLeft)) & 255;
      }
    }

    currentRow.copy(pixels, targetOffset);
    targetOffset += rowLength;
    previousRow = currentRow;
  }

  const rgbPixels = Buffer.alloc(width * height * 3);
  const alphaPixels = colorType === 4 || colorType === 6 ? Buffer.alloc(width * height) : undefined;

  for (let pixel = 0; pixel < width * height; pixel += 1) {
    const source = pixel * channels;
    const target = pixel * 3;

    if (colorType === 0 || colorType === 4) {
      rgbPixels[target] = pixels[source];
      rgbPixels[target + 1] = pixels[source];
      rgbPixels[target + 2] = pixels[source];
    } else {
      rgbPixels[target] = pixels[source];
      rgbPixels[target + 1] = pixels[source + 1];
      rgbPixels[target + 2] = pixels[source + 2];
    }

    if (alphaPixels) {
      alphaPixels[pixel] = colorType === 4 ? pixels[source + 1] : pixels[source + 3];
    }
  }

  return {
    width,
    height,
    rgb: deflateSync(rgbPixels),
    alpha: alphaPixels ? deflateSync(alphaPixels) : undefined,
  };
}

function getReceiptLogo() {
  if (receiptLogo !== undefined) return receiptLogo;

  try {
    receiptLogo = decodePng(readFileSync(join(process.cwd(), "public", "small_logo.png")));
  } catch {
    receiptLogo = null;
  }

  return receiptLogo;
}

function splitReceiptLines(lines: string[]) {
  const nonEmpty = lines.filter((line) => line.trim().length > 0);
  const footer = nonEmpty.slice(-2);
  const rows = nonEmpty.slice(0, -2).map((line) => {
    const colonIndex = line.indexOf(":");

    if (colonIndex === -1) {
      return { label: "", value: line };
    }

    return {
      label: line.slice(0, colonIndex),
      value: line.slice(colonIndex + 1).trim(),
    };
  });

  return { rows, footer };
}

export function createSimplePdf(title: string, lines: string[]) {
  const pageWidth = 595;
  const pageHeight = 842;
  const { rows, footer } = splitReceiptLines(lines);
  const logo = getReceiptLogo();
  const commands: string[] = [];

  commands.push(rect(0, 0, pageWidth, pageHeight, colors.white));

  if (logo) {
    commands.push(image(46, 760, 44, 44));
  } else {
    commands.push(text(46, 780, "NB", 15, colors.ink, "F2"));
  }

  commands.push(text(108, 790, "NOVA BLACK ETECH PRIVATE LIMITED", 15, colors.ink, "F2"));
  commands.push(text(108, 770, title, 10, colors.ink, "F1"));

  const tableX = 46;
  const tableY = 714;
  const tableWidth = 503;
  const labelX = 62;
  const valueX = 220;
  const tableTop = tableY - 28;
  const headerHeight = 28;
  let rowTop = tableTop - headerHeight;

  commands.push(text(tableX, tableY, "Payment details", 13, colors.ink, "F2"));
  commands.push(strokeRect(tableX, rowTop, tableWidth, headerHeight, colors.ink, 0.8));
  commands.push(strokeLine(valueX - 16, rowTop, valueX - 16, tableTop, colors.ink, 0.8));
  commands.push(text(labelX, tableTop - 18, "Field", 9, colors.ink, "F2"));
  commands.push(text(valueX, tableTop - 18, "Value", 9, colors.ink, "F2"));

  rows.forEach((row) => {
    const rowLines = wrapText(row.value || "Unavailable", 54);
    const rowHeight = Math.max(28, 16 + rowLines.length * 11);
    const rowBottom = rowTop - rowHeight;

    commands.push(strokeRect(tableX, rowBottom, tableWidth, rowHeight, colors.ink, 0.35));
    commands.push(text(labelX, rowTop - 18, row.label || "Note", 9, colors.ink, "F2"));
    rowLines.forEach((line, lineIndex) => {
      commands.push(text(valueX, rowTop - 18 - lineIndex * 11, line, 9, colors.ink, "F1"));
    });
    commands.push(strokeLine(valueX - 16, rowBottom, valueX - 16, rowTop, colors.ink, 0.35));
    rowTop = rowBottom;
  });

  commands.push(text(46, 112, "Terms", 10, colors.ink, "F2"));
  footer.forEach((line, index) => {
    wrapText(line, 94).forEach((wrappedLine, wrappedIndex) => {
      commands.push(
        text(
          46,
          94 - index * 18 - wrappedIndex * 10,
          wrappedLine,
          8,
          colors.ink,
          "F1"
        )
      );
    });
  });

  commands.push(strokeLine(46, 42, 549, 42, colors.ink, 0.35));
  commands.push(text(46, 25, "Nova Black Etech Private Limited", 7, colors.ink, "F2"));
  commands.push(text(409, 25, "novablacketechprivatelimited.com", 7, colors.ink, "F1"));

  const contentStream = commands.join("\n");
  const pageResources = logo ? "/XObject << /Logo 7 0 R >>" : "";
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> ${pageResources} >> /Contents 6 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`,
  ];

  if (logo) {
    const logoData = asciiHex(logo.rgb);
    const logoMask = logo.alpha ? " /SMask 8 0 R" : "";

    objects.push(
      `<< /Type /XObject /Subtype /Image /Width ${logo.width} /Height ${logo.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter [/ASCIIHexDecode /FlateDecode]${logoMask} /Length ${Buffer.byteLength(logoData, "ascii")} >>\nstream\n${logoData}\nendstream`
    );

    if (logo.alpha) {
      const alphaData = asciiHex(logo.alpha);

      objects.push(
        `<< /Type /XObject /Subtype /Image /Width ${logo.width} /Height ${logo.height} /ColorSpace /DeviceGray /BitsPerComponent 8 /Filter [/ASCIIHexDecode /FlateDecode] /Length ${Buffer.byteLength(alphaData, "ascii")} >>\nstream\n${alphaData}\nendstream`
      );
    }
  }
  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "utf8");

  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, "utf8");
}
