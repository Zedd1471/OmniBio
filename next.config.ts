/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This disables ESLint errors from failing the production build
    ignoreDuringBuilds: true,
  },
  // You can add other custom config options here
  experimental: {
    // Example: enable appDir if you're using the /app directory
    appDir: true,
  },
};

export default nextConfig;
