import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=31536000; includeSubDomains;",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "X-XSS-Protection",
  //           value: "1; mode=block",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self'; img-src 'self' https://your-allowed-images-source.com;",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "no-referrer-when-downgrade",
  //         },
  //         {
  //           key: "Permissions-Policy",
  //           value: "geolocation=(), microphone=(), camera=()",
  //         },
  //         {
  //           key: "Upgrade-Insecure-Requests",
  //           value: "1",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
