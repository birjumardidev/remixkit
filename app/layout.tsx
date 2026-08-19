import "./globals.css";
import type { Metadata } from "next";
import { jakarta } from "@/lib/fonts";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.remixkit.in"
).replace(/\/$/, "");
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
let supabaseHost: string | undefined;
try {
  supabaseHost = supabaseUrl ? new URL(supabaseUrl).hostname : undefined;
} catch (e) {
  supabaseHost = undefined;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RemixKit — AI Image Editing Prompts",
  description:
    "Discover, copy, and publish trending AI image editing prompts — Cartoon/Chibi, cinematic, vinyl toy, golden hour, and A24 poster aesthetics.",
  openGraph: {
    title: "RemixKit — AI Image Editing Prompts",
    description:
      "Discover, copy, and publish trending AI image editing prompts.",
    url: siteUrl,
    siteName: "RemixKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemixKit — AI Image Editing Prompts",
    description:
      "Discover, copy, and publish trending AI image editing prompts.",
  },
  icons: [
    { rel: "icon", url: "/icon.png" },
    { rel: "shortcut icon", url: "/icon.png" },
    { rel: "apple-touch-icon", url: "/icon.png" },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {supabaseHost && (
          <>
            <link
              rel="preconnect"
              href={`https://${supabaseHost}`}
              crossOrigin="anonymous"
            />
            <link rel="dns-prefetch" href={`https://${supabaseHost}`} />
          </>
        )}
        <link
          rel="preconnect"
          href="https://imagedelivery.net"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://imagedelivery.net" />
      </head>
      <body className={`${jakarta.className} antialiased`}>{children}</body>
    </html>
  );
}
