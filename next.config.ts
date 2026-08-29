import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https:;
    connect-src 'self' https: ws: wss:;
    frame-ancestors 'self';
    object-src 'none';
    base-uri 'self';
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy/alias routes — send both users and search engines straight to the
      // canonical page with a permanent (308) redirect instead of rendering a
      // client-side redirect page for each one.
      { source: "/login", destination: "/admin/login", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/expense-management", destination: "/expense-management-software", permanent: true },
      { source: "/performance-management", destination: "/employee-performance-management-software", permanent: true },
    ];
  },
};

export default nextConfig;
