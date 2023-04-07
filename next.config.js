/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
        port: "",
        pathname: "/user/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
