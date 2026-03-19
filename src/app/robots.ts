import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/private/", "/workspace-demo/", "/admin/"],
            },
        ],
        sitemap: "https://www.finza.africa/sitemap.xml",
    };
}
