import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.scdn.co']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
