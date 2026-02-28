import type { Metadata } from "next";
import { Inter, Oxanium, JetBrains_Mono, Racing_Sans_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const racingSansOne = Racing_Sans_One({
  variable: "--font-racing",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://boomathon.netlify.app";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Boomathon",
  description:
    "The ultimate arena of tough teamship. A high-stakes virtual scenario designed to test and forge elite teamship capabilities.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://boomathon.netlify.app"
  ),
  title: "Boomathon | Deploy Your Potential",
  description:
    "Boomathon is an immersive team challenge that measures leadership, collaboration, and core skills through adventure-based scenarios.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Boomathon | Deploy Your Potential",
    description:
      "The ultimate arena of tough teamship. A high-stakes virtual scenario designed to test and forge elite teamship capabilities.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://boomathon.netlify.app",
    siteName: "Boomathon",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boomathon - The Ultimate Arena of Tough Teamship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boomathon | Deploy Your Potential",
    description:
      "The ultimate arena of tough teamship. A high-stakes virtual scenario designed to test and forge elite teamship capabilities.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oxanium.variable} ${jetbrainsMono.variable} ${racingSansOne.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
