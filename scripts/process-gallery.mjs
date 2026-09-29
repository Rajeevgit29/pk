#!/usr/bin/env node
/**
 * Turns the original photos in photos/gallery/ into web-ready images for the Dome Gallery.
 *
 *   npm run gallery
 *
 * For every photo it writes:
 *   public/gallery/thumbs/<name>.webp  – small tile (640px wide) so the dome loads fast
 *   public/gallery/full/<name>.webp    – high-quality version (up to 2400px) shown when a tile is clicked
 * and lists them in src/content/gallery.generated.json.
 *
 * Originals in photos/gallery/ are never modified.
 * Optional: photos/gallery/captions.json → { "file-name.jpg": "Describe the photo for screen readers" }
 * Optional: photos/gallery/rotate.json   → { "file-name.png": 90 }  (degrees clockwise, for photos saved sideways)
 * iPhone HEIF/HEIC photos are converted with macOS's built-in `sips` when sharp can't read them.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "photos/gallery");
const thumbDir = path.join(root, "public/gallery/thumbs");
const fullDir = path.join(root, "public/gallery/full");
const manifestPath = path.join(root, "src/content/gallery.generated.json");

const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".tif", ".tiff", ".avif"]);

const humanize = (file) =>
  path
    .parse(file)
    .name.replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());

const slug = (file) =>
  path
    .parse(file)
    .name.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function main() {
  await mkdir(srcDir, { recursive: true });
  const files = (await readdir(srcDir)).filter((f) => exts.has(path.extname(f).toLowerCase())).sort();
  const captionsFile = path.join(srcDir, "captions.json");
  const captions = existsSync(captionsFile) ? JSON.parse(await readFile(captionsFile, "utf8")) : {};
  const rotateFile = path.join(srcDir, "rotate.json");
  const rotations = existsSync(rotateFile) ? JSON.parse(await readFile(rotateFile, "utf8")) : {};
  const tmp = await mkdtemp(path.join(os.tmpdir(), "pk-gallery-"));

  // sharp's bundled decoder can read iPhone HEIF metadata but not its (HEVC) pixels,
  // so on macOS convert HEIF/HEIC to a high-quality JPEG with the built-in `sips` first.
  const readable = async (input) => {
    if (!/\.hei[cf]$/i.test(input) || process.platform !== "darwin") return input;
    const out = path.join(tmp, `${path.parse(input).name}.jpg`);
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "95", input, "--out", out], { stdio: "ignore" });
    return out;
  };

  await rm(thumbDir, { recursive: true, force: true });
  await rm(fullDir, { recursive: true, force: true });
  await mkdir(thumbDir, { recursive: true });
  await mkdir(fullDir, { recursive: true });

  const manifest = [];
  for (const file of files) {
    const name = slug(file);
    try {
      const input = await readable(path.join(srcDir, file));
      let base = sharp(input, { failOn: "none", limitInputPixels: false }).rotate(); // respect phone orientation
      if (rotations[file]) base = sharp(await base.toBuffer()).rotate(rotations[file]); // fix photos saved sideways
      const meta = await base.metadata();
      await base
        .clone()
        .resize({ width: 640, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(path.join(thumbDir, `${name}.webp`));
      const full = await base
        .clone()
        .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 86 })
        .toFile(path.join(fullDir, `${name}.webp`));
      manifest.push({
        src: `/gallery/thumbs/${name}.webp`,
        full: `/gallery/full/${name}.webp`,
        alt: captions[file] ?? humanize(file),
        width: full.width,
        height: full.height,
      });
      const warn = Math.max(meta.width ?? 0, meta.height ?? 0) < 1200 ? "  (small original: may look soft when enlarged)" : "";
      console.log(`✓ ${file} → ${full.width}×${full.height}${warn}`);
    } catch (err) {
      console.warn(`✗ ${file}: ${err.message}\n  Tip: export it as JPG and try again.`);
    }
  }

  await rm(tmp, { recursive: true, force: true });
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`\n${manifest.length} photo(s) ready for the gallery.`);
}

main();
