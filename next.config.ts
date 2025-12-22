import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   env: {
    NEXT_PUBLIC_API_URL: 'https://essential-angel-fbef6af473.strapiapp.com',
  },
};

export default nextConfig;
