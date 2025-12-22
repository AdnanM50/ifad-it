import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  env: {
    NEXT_PUBLIC_API_URL: "https://essential-angel-fbef6af473.strapiapp.com",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "essential-angel-fbef6af473.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
