import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — no Node server needed in production.
  // Served by nginx (see Dockerfile) behind the APPS-host Traefik.
  output: "export",
};

export default nextConfig;
