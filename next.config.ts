import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/commandments",
        destination: "/bible-studies/the-dragon-and-the-commandments",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
