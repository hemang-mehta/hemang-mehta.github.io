import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { profile, site } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name }],
  keywords: [profile.name, "Software Developer", "Python", "AI/ML", "Full-stack", "Ahmedabad"],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme={site.theme}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
