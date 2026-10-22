import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Assisted conversion is consolidated on /request-trial. Keep the old demo
      // path permanent and preserve the demo attribution source.
      {
        source: "/demo",
        destination: "/request-trial?from=demo",
        permanent: true,
      },
      // The self-guided tour now lives at /product-tour. Keep every former
      // workspace-demo path permanent so existing links do not break.
      {
        source: "/workspace-demo",
        destination: "/product-tour",
        permanent: true,
      },
      {
        source: "/workspace-demo/service",
        destination: "/product-tour",
        permanent: true,
      },
      {
        source: "/workspace-demo/retail",
        destination: "/product-tour",
        permanent: true,
      },
      {
        source: "/workspace-demo/accountant",
        destination: "/product-tour",
        permanent: true,
      },
      // Legacy public pricing route. Hash fragments (#plans, #find-plan) stay in the
      // browser across redirects, so a single path redirect covers every old anchor.
      {
        source: "/pricing",
        destination: "/request-trial?from=legacy_pricing",
        permanent: true,
      },
      {
        source: "/pricing#plans",
        destination: "/request-trial?from=legacy_pricing",
        permanent: true,
      },
      {
        source: "/pricing#find-plan",
        destination: "/request-trial?from=legacy_pricing",
        permanent: true,
      },
      {
        source: "/blog/best-accounting-software-ghana",
        destination: "/best-accounting-software-ghana",
        permanent: true,
      },
      {
        source: "/invoice-software-ghana",
        destination: "/invoicing-software-ghana",
        permanent: true,
      },
      {
        source: "/accountants",
        destination: "/features",
        permanent: true,
      },
      {
        source: "/accounting-for-retail-ghana",
        destination: "/features",
        permanent: true,
      },
      {
        source: "/accounting-software-for-retailers-ghana",
        destination: "/features",
        permanent: true,
      },
      // Retired landing pages. The product positioning is broader now, so
      // these URLs point at the general Ghana accounting pages.
      {
        source: "/accounting-software-for-service-businesses-ghana",
        destination: "/accounting-software-ghana",
        permanent: true,
      },
      {
        source: "/accounting-for-service-business-ghana",
        destination: "/accounting-for-small-business-ghana",
        permanent: true,
      },
      // Neutral canonical blog slug for the invoice-errors article.
      {
        source: "/blog/invoice-errors-service-businesses-ghana",
        destination: "/blog/invoice-errors-businesses-ghana",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
