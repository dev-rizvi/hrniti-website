import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https:;
    frame-src 'self' https: data: blob: https://*.razorpay.com https://api.razorpay.com https://checkout.razorpay.com https://rzp.io https://*.google.com https://www.google.com https://maps.google.com https://*.youtube.com https://www.youtube.com;
    child-src 'self' blob: https: https://*.razorpay.com https://*.google.com;
    connect-src 'self' https: http://127.0.0.1:* http://localhost:* ws: wss:;
    frame-ancestors 'self';
    object-src 'none';
    base-uri 'self';
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
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
      // Legacy/alias routes
      { source: "/delhi", destination: "/hrms-payroll-software-in-delhi", permanent: true },
      { source: "/login", destination: "/admin/login", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/expense-management", destination: "/expense-management-software", permanent: true },
      { source: "/performance-management", destination: "/employee-performance-management-software", permanent: true },
    ];
  },
};

export default nextConfig;
