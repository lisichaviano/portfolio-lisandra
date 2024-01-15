/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  images: {
    domains: ["https://lisichaviano.github.io/portfolio-lisandra/"],
    path: "/images",
  },
};

module.exports = nextConfig;
