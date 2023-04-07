/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = 'utshp08.github.io'
   assetPrefix = `/${repo}/`
   basePath = `/${repo}`
}


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
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
