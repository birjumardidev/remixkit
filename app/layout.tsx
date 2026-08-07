import "./globals.css";
import type { Metadata } from "next";
import { jakarta } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "RemixKit — AI Image Editing Prompts",
  description:
    "Discover, copy, and publish trending AI image editing prompts — Y2K, cinematic, vinyl toy, golden hour, and A24 poster aesthetics.",
  openGraph: {
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
