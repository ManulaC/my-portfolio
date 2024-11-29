<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Ensures URLs work correctly on GitHub Pages
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
};

module.exports = nextConfig;
=======
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
>>>>>>> b75e565e8d53e84ca924c771e7b75f8b79cf8ce4
