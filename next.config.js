/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Suppress hydration warnings from browser extensions
  experimental: {
    suppressHydrationWarning: true,
  },
}

module.exports = nextConfig
