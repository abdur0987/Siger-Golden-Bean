import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"]
});

const description =
  "Siger Golden Bean supplies selected Sumatran coffee from Lampung and surrounding origins for importers, roasteries, cafes, resellers, and private label buyers. Request samples and product catalog.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sigergoldenbean.com"),
  title: "Siger Golden Bean | Sumatran Premium Coffee Export",
  description,
  keywords: [
    "Sumatra coffee export",
    "Lampung robusta coffee",
    "Indonesian coffee supplier",
    "Sumatran premium coffee",
    "Lampung coffee origin",
    "West Lampung robusta",
    "Krui coffee",
    "Indonesian robusta supplier",
    "coffee export Indonesia",
    "private label coffee Indonesia"
  ],
  openGraph: {
    title: "Siger Golden Bean | Sumatran Premium Coffee Export",
    description,
    url: "https://sigergoldenbean.com",
    siteName: "Siger Golden Bean",
    images: [
      {
        url: "/images/og/siger-golden-bean-og.webp",
        width: 1408,
        height: 768,
        alt: "Siger Golden Bean Sumatran Premium Coffee Export logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Siger Golden Bean | Sumatran Premium Coffee Export",
    description,
    images: ["/images/og/siger-golden-bean-og.webp"]
  },
  icons: {
    icon: [
      {
        url: "/images/logo/siger-golden-bean-logo-crop.webp",
        type: "image/webp"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
