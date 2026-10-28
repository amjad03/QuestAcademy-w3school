/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A second dev server can build into its own folder: NEXT_DIST_DIR=.next-dev next dev -p 3300
  distDir: process.env.NEXT_DIST_DIR || ".next",
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  // The lesson content is large; minifying it inside every server bundle made builds take over an hour.
  experimental: { serverMinification: false },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Microphone stays available for read-aloud practice; nothing else is needed.
          { key: "Permissions-Policy", value: "camera=(), geolocation=(), payment=(), usb=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/dashboard", destination: "/learn", permanent: false },
      { source: "/review", destination: "/practice", permanent: false },
      { source: "/explore", destination: "/courses", permanent: false },
      { source: "/kids", destination: "/courses?c=kids", permanent: false },
      { source: "/school", destination: "/courses?c=school", permanent: false },
      { source: "/campus", destination: "/courses?c=campus", permanent: false },
      { source: "/code", destination: "/courses?c=code", permanent: false },
      { source: "/learn/:subject/:topic/:lesson", destination: "/course/:subject/:topic/:lesson", permanent: true },
      { source: "/learn/:subject", destination: "/course/:subject", permanent: true },
    ];
  },
};
export default nextConfig;
