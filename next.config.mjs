/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
