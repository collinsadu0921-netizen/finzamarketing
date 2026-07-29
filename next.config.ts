import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
      {
        source: "/workspace-demo/retail",
        destination: "/features",
        permanent: true,
      },
      {
        source: "/workspace-demo/accountant",
        destination: "/features",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
