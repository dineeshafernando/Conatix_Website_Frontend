import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.conatix.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
