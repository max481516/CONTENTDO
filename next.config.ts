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
    // Grab the existing rule that handles SVG imports
    const assetRule = config.module.rules.find((rule: any) => rule?.test?.test?.('.svg'));

    if (assetRule) {
      // Reapply the existing rule, but only for svg imports ending in ?url
      config.module.rules.push(
        {
          ...assetRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: assetRule.issuer || /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // exclude if *.svg?url
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                // Let CSS control sizing
                dimensions: false,
                // Disable SVGO to avoid breaking masks/patterns
                svgo: false,
              },
            },
          ],
        }
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      assetRule.exclude = /\.svg$/i;
    } else {
      // Fallback for environments where the default asset rule isn't found
      config.module.rules.push(
        {
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
          type: 'asset/resource',
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                dimensions: false,
                svgo: false,
              },
            },
          ],
        }
      );
    }

    return config;
  },
};

export default nextConfig;
