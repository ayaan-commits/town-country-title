/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for SEO optimization
  output: 'export',

  // Trailing slashes for cleaner URLs
  trailingSlash: true,

  // Image optimization
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
