import "./globals.css";
import type { Metadata } from "next";
import { jakarta } from "@/lib/fonts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RemixKit — AI Image Editing Prompts",
  description:
    "Discover, copy, and publish trending AI image editing prompts — Y2K, cinematic, vinyl toy, golden hour, and A24 poster aesthetics.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`${jakarta.className} antialiased`}>{children}</body>
    </html>
  );
}
