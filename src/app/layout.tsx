import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { StickySignupCta } from "@/components/sticky-signup-cta";
import { JsonLd } from "@/components/json-ld";
import { organizationAndWebsiteGraph } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.finza.africa";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Finza — Accounting & Invoicing Software for Ghana (GHS)",
    template: "%s | Finza",
  },
  description:
    "Accounting and invoicing software for businesses in Ghana. Send invoices online, track payments in GHS, quotes, expenses, and reports—Ghana tax lines (VAT, NHIL, GETFund) where applicable. For service businesses and accountants.",
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
    title: "Finza — Accounting & Invoicing Software for Ghana (GHS)",
    description:
      "Invoices, quotes, and reports in Ghana cedis. Built for service businesses and accountants in Ghana.",
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
    title: "Finza — Accounting & Invoicing Software for Ghana (GHS)",
    description:
      "Run invoices, quotes, and money work in one place—in Ghana cedis.",
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
        <JsonLd data={organizationAndWebsiteGraph} />
        {/* ── Announcement Bar ── */}
        <div className="w-full bg-[#0F172A] text-white text-center py-2.5 px-4 text-sm font-medium">
          <span className="mr-2">🎉</span>
          <span>
            <strong>Early Access:</strong> Start your{" "}
            <strong>14-day free trial</strong> — no card required.
          </span>
          <a
            href="/pricing"
            className="ml-3 underline underline-offset-2 font-semibold hover:text-zinc-300 transition-colors"
          >
            Claim your spot →
          </a>
        </div>
        <Navbar />
        {children}
        <StickySignupCta />
      </body>
    </html>
  );
}
