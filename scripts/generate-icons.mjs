// Builds the site icons from the brand logo (public/images/brand).
// Usage: node scripts/generate-icons.mjs  (re-run whenever the logo changes)
// Writes Next.js metadata files into src/app (README > Favicon and icons):
//   favicon.ico     16, 32 and 48 px (browser tabs, bookmarks)
//   icon.png        512 px (modern browsers, search results)
//   apple-icon.png  180 px (iOS home screen)
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const SOURCE = "public/images/brand/taby-jeff-logo.webp";
const OUT = "src/app";

// Large icons use a 256-colour palette to stay small. ICO images must be
// RGBA PNGs (the spec, and Next.js rejects anything else), so they get alpha.
const png = (size, palette = false) =>
  sharp(SOURCE).resize(size, size).ensureAlpha()
    .png({ palette, compressionLevel: 9 }).toBuffer();

/** An .ico file holding PNG images (supported by every current browser). */
function toIco(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, index) => {
    const entry = 6 + 16 * index;
    header.writeUInt8(size % 256, entry); // width (0 means 256)
    header.writeUInt8(size % 256, entry + 1); // height
    header.writeUInt16LE(1, entry + 4); // colour planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((image) => image.data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(
  icoSizes.map(async (size) => ({ size, data: await png(size) })),
);

writeFileSync(`${OUT}/favicon.ico`, toIco(icoImages));
writeFileSync(`${OUT}/icon.png`, await png(512, true));
writeFileSync(`${OUT}/apple-icon.png`, await png(180, true));
console.log("Icons written to src/app: favicon.ico, icon.png, apple-icon.png");
