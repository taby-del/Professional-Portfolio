import type { NextConfig } from "next";
import { SECURITY_HEADERS } from "./src/config/security/headers";

const nextConfig: NextConfig = {
  // Defaults from create-next-app (Next.js 16)
  cacheComponents: true,
  partialPrefetching: true,

  // Hides the "X-Powered-By: Next.js" header (less fingerprinting).
  poweredByHeader: false,

  // Tailwind CSS v4 processing through Turbopack
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Security headers on every route
  async headers() {
    return [{ source: "/(.*)", headers: [...SECURITY_HEADERS] }];
  },
};

export default nextConfig;
