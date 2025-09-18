/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
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
