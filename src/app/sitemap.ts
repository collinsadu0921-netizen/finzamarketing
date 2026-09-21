import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-posts";

function staticEntry(
  url: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap[number] {
  return { url, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = [
    staticEntry("https://www.finza.africa/blog", "weekly", 0.75),
    ...getAllSlugs().map((slug) =>
      staticEntry(`https://www.finza.africa/blog/${slug}`, "monthly", 0.65)
    ),
  ];

  return [
    // ── Core pages (highest priority) ─────────────────────────────────────
    staticEntry("https://www.finza.africa", "weekly", 1),
    staticEntry("https://www.finza.africa/features", "weekly", 0.85),
    staticEntry("https://www.finza.africa/pricing", "monthly", 0.85),
    staticEntry("https://www.finza.africa/demo", "yearly", 0.8),
    staticEntry("https://www.finza.africa/privacy", "yearly", 0.5),
    staticEntry("https://www.finza.africa/terms", "yearly", 0.5),
    staticEntry("https://www.finza.africa/about", "yearly", 0.65),
    staticEntry("https://www.finza.africa/security", "yearly", 0.65),
    staticEntry("https://www.finza.africa/contact", "yearly", 0.65),

    // ── SEO landing pages (high priority) ─────────────────────────────────
    staticEntry("https://www.finza.africa/accounting-software-ghana", "monthly", 0.88),
    staticEntry("https://www.finza.africa/invoicing-software-ghana", "monthly", 0.8),
    staticEntry("https://www.finza.africa/quotation-software-ghana", "monthly", 0.72),
    staticEntry("https://www.finza.africa/vat-software-ghana", "monthly", 0.8),
    staticEntry("https://www.finza.africa/bookkeeping-software-ghana", "monthly", 0.78),
    staticEntry("https://www.finza.africa/payroll-software-ghana", "monthly", 0.82),
    staticEntry("https://www.finza.africa/accounting-software-accra", "monthly", 0.76),
    staticEntry("https://www.finza.africa/invoicing-software-kumasi", "monthly", 0.76),
    staticEntry("https://www.finza.africa/payroll-software-tema", "monthly", 0.76),
    staticEntry("https://www.finza.africa/expense-tracking-software-ghana", "monthly", 0.74),
    staticEntry("https://www.finza.africa/invoice-tracking-software-ghana", "monthly", 0.74),
    staticEntry("https://www.finza.africa/quickbooks-alternative-ghana", "monthly", 0.76),
    staticEntry("https://www.finza.africa/sage-accounting-alternative-ghana", "monthly", 0.76),
    staticEntry("https://www.finza.africa/accounting-software-for-cleaning-business-ghana", "monthly", 0.73),
    staticEntry("https://www.finza.africa/invoice-software-for-contractors-ghana", "monthly", 0.73),
    staticEntry("https://www.finza.africa/bookkeeping-for-small-business-ghana", "monthly", 0.73),
    staticEntry("https://www.finza.africa/small-business-accounting-ghana", "monthly", 0.8),
    staticEntry("https://www.finza.africa/ghana-vat-nhil-getfund", "monthly", 0.75),
    staticEntry("https://www.finza.africa/accounting-software-for-service-businesses-ghana", "monthly", 0.8),

    // ── Topic cluster (informational) ─────────────────────────────────────
    staticEntry("https://www.finza.africa/how-vat-works-ghana", "monthly", 0.72),
    staticEntry("https://www.finza.africa/nhil-getfund-explained", "monthly", 0.72),
    staticEntry("https://www.finza.africa/ghana-vat-calculator", "monthly", 0.7),
    staticEntry("https://www.finza.africa/invoice-calculator-ghana", "monthly", 0.7),
    staticEntry("https://www.finza.africa/accounting-for-small-business-ghana", "monthly", 0.72),
    staticEntry("https://www.finza.africa/accounting-for-service-business-ghana", "monthly", 0.72),
    staticEntry("https://www.finza.africa/accounting-vs-excel-ghana", "monthly", 0.72),
    staticEntry("https://www.finza.africa/best-accounting-software-ghana", "monthly", 0.72),

    ...blogEntries,
  ];
}
