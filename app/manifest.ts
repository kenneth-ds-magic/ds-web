import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital Solutions | Pioneering Telecommunications & Software Systems",
    short_name: "Digital Solutions",
    description:
      "Carrier-grade telecommunications gateways, open-source infrastructure (Mbuni, Zorilla, Njiwa), and bespoke enterprise digital architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ea1d05",
    icons: [
      {
        src: "/images/log-no-bg.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
