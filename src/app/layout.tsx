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

export const metadata: Metadata = {
  title: "Boomathon | Deploy Your Potential",
  description:
    "Boomathon is an immersive team challenge that measures leadership, collaboration, and core skills through adventure-based scenarios.",
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
        {children}
      </body>
    </html>
  );
}
