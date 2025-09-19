/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove output: 'export' to enable SSR/SSG
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.sanity.io'],
    formats: ['image/webp', 'image/avif'],
  },
  webpack: (config, { isServer }) => {
    // Exclude sanity-studio from webpack compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/sanity-studio/**', '**/sanity-schemas/**']
    }
    return config
  }
}

module.exports = nextConfig
