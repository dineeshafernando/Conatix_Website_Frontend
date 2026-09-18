import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
