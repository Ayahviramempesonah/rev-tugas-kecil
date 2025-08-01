import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [
  //     new URL("https://qysqqwp098bn3wgo.public.blob.vercel-storage.com"),
  //   ],
  // },

  images: {
    remotePatterns: [
      new URL("https://qysqqwp098bn3wgo.public.blob.vercel-storage.com/**"),
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "storyapp-gamma.vercel.app"],
    },
  },
  // experimental: {
  //   bodySizeLimit: "5mb",
  // },
};

// module.exports = {
//   images: {
//     remotePatterns: [
//       new URL("https://qysqqwp098bn3wgo.public.blob.vercel-storage.com/**"),
//     ],
//   },
//   experimental: {
//     bodySizeLimit: "5mb",
//   },
// };

// export default nextConfig;
module.exports = nextConfig;
