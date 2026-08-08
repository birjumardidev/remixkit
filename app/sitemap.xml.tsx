import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const staticPages = ["", "prompts", "admin"];

const categories = [
  "photorealism",
  "fantasy",
  "minimalist",
  "portrait",
  "landscape",
  "concept-art",
  "vintage",
  "cinematic",
  "abstract",
  "editorial",
];

const promptSlugs = [
  "bioluminescent-fantasy-forest-prompt",
  "midnight-noir-fashion-editorial-prompt",
  "vaporwave-cyberpunk-cityscape-prompt",
  "ethereal-high-fashion-portrait-prompt",
  "mechanical-steampunk-dragon-prompt",
  "mystical-astral-temple-prompt",
  "gothic-cathedral-ruins-prompt",
  "sunset-desert-landschaft-prompt",
  "hyperrealistic-food-photography-prompt",
  "retro-futuristic-racing-prompt",
];

function renderUrl(path: string) {
  return `${siteUrl}/${path}`.replace(/\/\/$/, "");
}

export function GET() {
  const pages = [
    ...staticPages.map((path) => ({ path, priority: "1.0" })),
    ...categories.map((category) => ({
      path: `prompts/${category}`,
      priority: "0.8",
    })),
    ...promptSlugs.map((slug) => ({
      path: `prompts/${slug}`,
      priority: "0.7",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority }) =>
      `  <url>\n    <loc>${renderUrl(path)}</loc>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
    },
  });
}
