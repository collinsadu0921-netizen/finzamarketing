import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { StickySignupCta } from "@/components/sticky-signup-cta";
import { JsonLd } from "@/components/json-ld";
import { organizationAndWebsiteGraph } from "@/lib/schema";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.finza.africa";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Finza — Accounting Software for Ghanaian Businesses",
    template: "%s | Finza",
  },
  description:
    "Accounting software for Ghanaian businesses and SMEs. Send invoices, track payments in GHS, record expenses, run payroll, and review reports. Ghana tax lines (VAT, NHIL, GETFund) where applicable.",
  keywords: [
    "accounting software Ghana",
    "accounting software for SMEs Ghana",
    "invoicing software Ghana",
    "bookkeeping Ghana",
    "Finza",
    "VAT Ghana",
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
    title: "Finza — Accounting Software for Ghanaian Businesses",
    description:
      "Accounting software for Ghanaian businesses. Invoices, expenses, payroll, and reports in Ghana cedis.",
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
    title: "Finza — Accounting Software for Ghanaian Businesses",
    description:
      "Accounting software for Ghanaian businesses. Invoices, Mobile Money payments through Hubtel, payroll, and reports in Ghana cedis.",
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
        <div className="w-full border-b border-zinc-200/80 bg-zinc-50 px-4 py-2 text-center text-sm text-zinc-700">
          <Link
            href="/pricing"
            className="inline-flex flex-wrap items-center justify-center gap-x-1.5 font-medium transition-colors hover:text-zinc-900"
          >
            <span>Plans from GH₵149/month · Start with a 14-day free trial — no card required.</span>
            <span className="font-semibold text-[#0F172A] underline underline-offset-2">
              Compare plans
            </span>
          </Link>
        </div>
        <Navbar />
        {children}
        <StickySignupCta />
        <Analytics />
      </body>
    </html>
  );
}
