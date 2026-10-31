import type { NextConfig } from "next";

// Static export for GitHub Pages: run with NEXT_STATIC_EXPORT=1
//   e.g. NEXT_STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/my-repo npm run build:static
// Normal dev/standalone builds are unaffected.
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const sharedConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

const nextConfig: NextConfig = isStaticExport
  ? {
      ...sharedConfig,
      output: "export",
      basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
      images: { unoptimized: true },
    }
  : {
      ...sharedConfig,
      output: "standalone",
    };

export default nextConfig;
