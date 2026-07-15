import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/portofolio',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/scan',
          destination: 'https://scanner-eta-two.vercel.app/',
          basePath: false,
        },
        {
          source: '/scan/:path*',
          destination: 'https://scanner-eta-two.vercel.app/:path*',
          basePath: false,
        },
      ],
    };
  },
};

export default nextConfig;
