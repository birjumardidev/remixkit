import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl.replace(/https?:\/\//, "")}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
    },
  });
}
