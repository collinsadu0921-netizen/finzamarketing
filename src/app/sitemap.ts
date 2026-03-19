import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const blogEntries: MetadataRoute.Sitemap = [
        {
            url: "https://www.finza.africa/blog",
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.75,
        },
        ...getAllSlugs().map((slug) => ({
            url: `https://www.finza.africa/blog/${slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.65,
        })),
    ];

    return [
        // ── Core pages (highest priority) ─────────────────────────────────────
        {
            url: "https://www.finza.africa",
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://www.finza.africa/features",
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://www.finza.africa/pricing",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.finza.africa/accountants",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: "https://www.finza.africa/demo",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: "https://www.finza.africa/privacy",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://www.finza.africa/terms",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://www.finza.africa/about",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.65,
        },
        {
            url: "https://www.finza.africa/security",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.65,
        },
        {
            url: "https://www.finza.africa/contact",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.65,
        },

        // ── SEO landing pages (high priority) ─────────────────────────────────
        {
            url: "https://www.finza.africa/accounting-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: "https://www.finza.africa/invoice-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.finza.africa/vat-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.finza.africa/bookkeeping-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: "https://www.finza.africa/small-business-accounting-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.finza.africa/ghana-vat-nhil-getfund",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: "https://www.finza.africa/accounting-software-for-retailers-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.finza.africa/accounting-software-for-service-businesses-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // ── Topic cluster (informational) ─────────────────────────────────────
        {
            url: "https://www.finza.africa/how-vat-works-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.72,
        },
        {
            url: "https://www.finza.africa/nhil-getfund-explained",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.72,
        },
        {
            url: "https://www.finza.africa/ghana-vat-calculator",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://www.finza.africa/accounting-for-small-business-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.72,
        },
        {
            url: "https://www.finza.africa/accounting-for-retail-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.72,
        },
        {
            url: "https://www.finza.africa/accounting-for-service-business-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.72,
        },
        {
            url: "https://www.finza.africa/accounting-vs-excel-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.72,
        },
        {
            url: "https://www.finza.africa/best-accounting-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.72,
        },

        // ── Demo workspace shells ────────────────────────────────────────────
        {
            url: "https://www.finza.africa/workspace-demo",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.35,
        },
        {
            url: "https://www.finza.africa/workspace-demo/retail",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.35,
        },
        {
            url: "https://www.finza.africa/workspace-demo/service",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.35,
        },
        {
            url: "https://www.finza.africa/workspace-demo/accountant",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.35,
        },

        ...blogEntries,
    ];
}
