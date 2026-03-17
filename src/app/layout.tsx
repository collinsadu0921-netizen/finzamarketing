import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://finza.gh";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Finza — Ledger-First Accounting for Ghanaian Businesses",
    template: "%s | Finza",
  },
  description:
    "Finza gives Ghanaian businesses structured accounting with built-in Ghana VAT, automated ledger posting, and real-time financial reports. No spreadsheets. No guesswork.",
  keywords: [
    "Ghana accounting software",
    "VAT Ghana",
    "GRA compliance",
    "business accounting Ghana",
    "ledger software",
    "Finza",
    "NHIL",
    "GETFund",
  ],
  authors: [{ name: "Finza", url: BASE_URL }],
  creator: "Finza",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: BASE_URL,
    siteName: "Finza",
    title: "Finza — Ledger-First Accounting for Ghanaian Businesses",
    description:
      "Structured accounting with built-in Ghana VAT, automated ledger posting, and real-time financial reports. Built for Ghanaian businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Finza — Accounting built for Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finza — Ledger-First Accounting for Ghanaian Businesses",
    description:
      "Structured accounting with built-in Ghana VAT, automated ledger posting, and real-time financial reports.",
    images: ["/og-image.png"],
    creator: "@finzagh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
