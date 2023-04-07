/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "utshp08.github.io";
let basePath = "";

if (isGithubActions) {
  const repo = "utshp08.github.io";
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
