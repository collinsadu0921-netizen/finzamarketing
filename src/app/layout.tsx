import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Finza - Accurate Accounting. Automatically.",
    template: "%s | Finza",
  },
  description: "Finza is a ledger-first accounting platform built for Ghanaian businesses. Automatic posting. Built-in VAT logic. Accountant-ready.",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://finza.gh",
    title: "Finza - Accurate Accounting. Automatically.",
    description: "Finza is a ledger-first accounting platform built for Ghanaian businesses. Automatic posting. Built-in VAT logic. Accountant-ready.",
    siteName: "Finza",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finza - Accurate Accounting. Automatically.",
    description: "Finza is a ledger-first accounting platform built for Ghanaian businesses. Automatic posting. Built-in VAT logic. Accountant-ready.",
    creator: "@finzagh",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
