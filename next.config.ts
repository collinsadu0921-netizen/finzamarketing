import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/invoice-software-ghana",
        destination: "/invoicing-software-ghana",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
