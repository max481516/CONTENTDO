import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensure Next uses this project as the workspace root (silences lockfile warning)
  outputFileTracingRoot: path.join(__dirname),
  compiler: {
    styledComponents: true,
  },
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
