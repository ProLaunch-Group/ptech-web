import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    // Serves images in AVIF and WebP for up to 20% smaller file sizes & faster LCP
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Enables strict mode checks for memory leaks & unnecessary re-renders
  reactStrictMode: true,

  // Compresses server responses with Gzip/Brotli
  compress: true,

  // Removes console.log statements in production builds to reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
};

export default nextConfig;