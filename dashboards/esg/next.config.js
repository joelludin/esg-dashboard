/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dashboards/esg',
  assetPrefix: '/dashboards/esg/',
}

module.exports = nextConfig 