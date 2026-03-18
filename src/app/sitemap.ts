import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        // ── Core pages (highest priority) ─────────────────────────────────────
        {
            url: "https://finza.africa",
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://finza.africa/features",
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://finza.africa/pricing",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://finza.africa/accountants",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: "https://finza.africa/demo",
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.8,
        },

        // ── SEO landing pages (high priority) ─────────────────────────────────
        {
            url: "https://finza.africa/accounting-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: "https://finza.africa/invoice-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://finza.africa/vat-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://finza.africa/bookkeeping-software-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: "https://finza.africa/small-business-accounting-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://finza.africa/ghana-vat-nhil-getfund",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: "https://finza.africa/accounting-software-for-retailers-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://finza.africa/accounting-software-for-service-businesses-ghana",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
