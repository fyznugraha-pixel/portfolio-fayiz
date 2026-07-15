import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/portofolio',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/scanner',
          destination: 'https://scanner-eta-two.vercel.app/',
          basePath: false,
        },
        {
          source: '/scanner/:path*',
          destination: 'https://scanner-eta-two.vercel.app/:path*',
          basePath: false,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
