import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔥 disables ESLint on Vercel builds
  },
};

export default nextConfig;
