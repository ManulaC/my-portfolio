/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Ensures URLs work correctly on GitHub Pages
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
};

module.exports = nextConfig;
