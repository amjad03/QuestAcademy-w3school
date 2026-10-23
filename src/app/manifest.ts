import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quest Academy",
    short_name: "Quest Academy",
    description: "Free lessons, practice and mock tests from pre-school to college, in English and six Indian languages.",
    start_url: "/learn",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2F6BFF",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
