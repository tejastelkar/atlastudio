import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";

const ROOT = process.cwd();
const TARGET_URL = "https://www.orbix.studio/";
const PUBLIC_DIR = path.join(ROOT, "public", "orbix-clone");
const CONTENT_DIR = path.join(ROOT, "src", "content");
const STYLES_DIR = path.join(ROOT, "src", "styles");

await fs.mkdir(PUBLIC_DIR, { recursive: true });
await fs.mkdir(CONTENT_DIR, { recursive: true });
await fs.mkdir(STYLES_DIR, { recursive: true });

const downloaded = new Map();
const cssAssets = new Map();
const failed = new Map();

function normalizeUrl(url, base = TARGET_URL) {
  if (!url) return null;
  if (
    url.startsWith("data:") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("#")
  ) {
    return null;
  }
  return new URL(url, base).toString();
}

function toLocalPath(url, category = "assets") {
  const parsed = new URL(url);
  const pathname = parsed.pathname === "/" ? "/index" : parsed.pathname;
  const safePath = pathname.replace(/\/+/g, "/");
  return path.posix.join("/orbix-clone", category, parsed.hostname, safePath);
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function fetchBuffer(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function download(url, category = "assets") {
  const normalized = normalizeUrl(url);
  if (!normalized) return null;
  if (downloaded.has(normalized)) return downloaded.get(normalized);
  if (failed.has(normalized)) return null;

  try {
    const localWebPath = toLocalPath(normalized, category);
    const localFsPath = path.join(ROOT, "public", localWebPath.replace(/^\/+/, ""));
    await ensureDir(localFsPath);
    const buffer = await fetchBuffer(normalized);
    await fs.writeFile(localFsPath, buffer);
    downloaded.set(normalized, localWebPath);
    return localWebPath;
  } catch (error) {
    failed.set(normalized, error instanceof Error ? error.message : String(error));
    return null;
  }
}

function collectUrlsFromCss(cssText, baseUrl) {
  const matches = [...cssText.matchAll(/url\((['"]?)(.*?)\1\)/g)];
  return matches
    .map((match) => match[2])
    .map((value) => normalizeUrl(value, baseUrl))
    .filter(Boolean);
}

function rewriteCssUrls(cssText, baseUrl) {
  return cssText.replace(/url\((['"]?)(.*?)\1\)/g, (full, quote, rawUrl) => {
    const normalized = normalizeUrl(rawUrl, baseUrl);
    if (!normalized) return full;
    const localPath = cssAssets.get(normalized) || downloaded.get(normalized);
    return localPath ? `url("${localPath}")` : full;
  });
}

const htmlResponse = await fetch(TARGET_URL);
if (!htmlResponse.ok) {
  throw new Error(`Failed to fetch ${TARGET_URL}: ${htmlResponse.status}`);
}
const html = await htmlResponse.text();
const $ = load(html);

const stylesheetUrls = $('link[rel="stylesheet"]')
  .map((_, el) => $(el).attr("href"))
  .get()
  .map((href) => normalizeUrl(href))
  .filter(Boolean);

const scriptUrls = $("script[src]")
  .map((_, el) => $(el).attr("src"))
  .get()
  .map((src) => normalizeUrl(src))
  .filter(Boolean);

const assetUrls = new Set(
  [
    ...$("img")
      .map((_, el) => $(el).attr("src"))
      .get(),
    ...$("source")
      .map((_, el) => $(el).attr("src"))
      .get(),
    ...$("video")
      .map((_, el) => $(el).attr("poster"))
      .get(),
    ...$('link[rel*="icon"]')
      .map((_, el) => $(el).attr("href"))
      .get(),
  ]
    .map((url) => normalizeUrl(url))
    .filter(Boolean),
);

for (const url of assetUrls) {
  await download(url, "assets");
}

for (const url of scriptUrls) {
  await download(url, "scripts");
}

const cssImports = [];
for (const url of stylesheetUrls) {
  const cssBuffer = await fetchBuffer(url);
  let cssText = cssBuffer.toString("utf8");
  const nestedUrls = collectUrlsFromCss(cssText, url);
  for (const nestedUrl of nestedUrls) {
    const localPath = await download(nestedUrl, "assets");
    if (localPath) cssAssets.set(nestedUrl, localPath);
  }
  cssText = rewriteCssUrls(cssText, url);

  const parsed = new URL(url);
  const fileName = path.basename(parsed.pathname);
  const styleFilePath = path.join(STYLES_DIR, fileName);
  await fs.writeFile(styleFilePath, cssText);
  cssImports.push(`@import "../styles/${fileName}";`);
}

const replacements = [
  {
    from: "Our projects typically start at $2,999, depending on the scope, timeline, and level of support you need.",
    to: "Shopify websites start at 10k. Custom-coded sites and deeper ecommerce work are scoped separately based on the project.",
  },
  {
    from: "Startup - $2,999",
    to: "Shopify Website - 10k Starting",
  },
  {
    from: "enterprise - $5,499",
    to: "Custom Websites & Ecommerce",
  },
  {
    from: "Monthly Product Support For SaaS Teams",
    to: "Websites & Ecommerce For Growing Brands",
  },
  {
    from: "Get ongoing design and development support for your SaaS product with flexible monthly plans built for fast-moving teams.",
    to: "We build Shopify websites, custom-coded sites, and conversion-focused ecommerce experiences for brands that need a modern online presence.",
  },
  {
    from: "from $5,000 while others cost $100,000 or more",
    to: "with Shopify websites starting at 10k",
  },
];

for (const replacement of replacements) {
  $("body")
    .find("*")
    .each((_, el) => {
      const children = el.childNodes || [];
      for (const child of children) {
        if (child.type === "text" && child.data?.includes(replacement.from)) {
          child.data = child.data.replaceAll(replacement.from, replacement.to);
        }
      }
    });
}

$(".pricing-section .section-heading").html(
  'Shopify Website <span class="font-ivyoradisplay">Starting at 10k</span>',
);
$(".pricing-section .section-details-text").text(
  "We build Shopify websites, custom-coded sites, and conversion-focused ecommerce experiences for brands that need a modern online presence.",
);
$(".pricing-section .home-pricing-card")
  .eq(0)
  .find(".plan-heading-text > div")
  .eq(1)
  .text(
    "Best for quick-launch stores with clean design, essential setup, and SEO-ready pages.",
  );
$(".pricing-section .home-pricing-card")
  .eq(1)
  .find(".plan-heading-text > div")
  .eq(0)
  .text("Custom Websites & Ecommerce");
$(".pricing-section .home-pricing-card")
  .eq(1)
  .find(".plan-heading-text > div")
  .eq(1)
  .text(
    "Custom-coded sites, advanced ecommerce, and larger builds are scoped after a quick discovery call.",
  );

$(".faq-area .faq-item-content").each((_, el) => {
  const text = $(el).text();
  if (text.includes("Our projects typically start")) {
    $(el)
      .find("div")
      .last()
      .text(
        "Shopify websites start at 10k. Custom-coded websites and larger ecommerce projects are quoted after scope review.",
      );
  }
});

$(".faq-area .faq-item-toggle, .faq-area .faq-title, .faq-area .faq-question").each(
  (_, el) => {
    if ($(el).text().includes("What is your starting price")) {
      $(el).text("What is your Shopify starting price?");
    }
  },
);

$(".popup-wrapper label[for='Project-budget']").text("Project type*");
$(".popup-wrapper #Project-budget")
  .empty()
  .append('<option value="">Select project...</option>')
  .append('<option value="Shopify Website">Shopify website</option>')
  .append('<option value="Custom Business Website">Custom business website</option>')
  .append('<option value="Ecommerce Store">Ecommerce store</option>')
  .append('<option value="SEO + Website">SEO + website</option>')
  .append('<option value="Not Sure Yet">Not sure yet</option>');

$('link[rel="stylesheet"]').remove();
$("script[src]").remove();
$("script:not([src])").remove();

$("a[href]").each((_, el) => {
  const href = $(el).attr("href");
  if (!href) return;
  if (href.startsWith("https://www.orbix.studio")) {
    const parsed = new URL(href);
    $(el).attr("href", parsed.pathname || "/");
  }
});

const bodyHtml = ($("body").html() ?? "")
  .replaceAll(
    "from $5,000 while others cost $100,000 or more",
    "with Shopify websites starting at 10k",
  )
  .replaceAll("$5,000", "10k")
  .replaceAll("$100,000", "10k+");
await fs.writeFile(path.join(CONTENT_DIR, "orbix-home.html"), bodyHtml);
await fs.writeFile(
  path.join(CONTENT_DIR, "orbix-css-imports.ts"),
  `export const orbixCssImports = ${JSON.stringify(cssImports, null, 2)} as const;\n`,
);
await fs.writeFile(
  path.join(CONTENT_DIR, "orbix-stylesheets.ts"),
  `export const orbixStylesheets = ${JSON.stringify(stylesheetUrls, null, 2)} as const;\n`,
);
await fs.writeFile(
  path.join(CONTENT_DIR, "orbix-scripts.ts"),
  `export const orbixScripts = ${JSON.stringify(scriptUrls, null, 2)} as const;\n`,
);
await fs.writeFile(
  path.join(ROOT, "docs", "research", "orbix.studio", "download-manifest.json"),
  `${JSON.stringify(Object.fromEntries(downloaded.entries()), null, 2)}\n`,
);
await fs.writeFile(
  path.join(ROOT, "docs", "research", "orbix.studio", "download-failures.json"),
  `${JSON.stringify(Object.fromEntries(failed.entries()), null, 2)}\n`,
);

console.log(`Downloaded ${downloaded.size} Orbix assets`);
