/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["uploads-ssl.webflow.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
