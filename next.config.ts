import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
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
