import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

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
    ];
}
