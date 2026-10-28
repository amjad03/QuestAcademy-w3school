import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/learn",
    name: "Quest Academy",
    short_name: "Quest Academy",
    description: "Free lessons, practice and mock tests from pre-school to college, in English and six Indian languages.",
    start_url: "/learn",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#ffffff",
    theme_color: "#2F6BFF",
    categories: ["education"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "My class", url: "/learn" },
      { name: "Practice & tests", url: "/practice" },
      { name: "Offline lessons", url: "/offline" },
    ],
  };
}
