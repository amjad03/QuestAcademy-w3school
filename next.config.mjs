/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A second dev server can build into its own folder: NEXT_DIST_DIR=.next-dev next dev -p 3300
  distDir: process.env.NEXT_DIST_DIR || ".next",
  eslint: { ignoreDuringBuilds: true },
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
