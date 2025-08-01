import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [
  //     new URL("https://qysqqwp098bn3wgo.public.blob.vercel-storage.com"),
  //   ],
  // },
};

module.exports = {
  images: {
    remotePatterns: [
      new URL("https://qysqqwp098bn3wgo.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
