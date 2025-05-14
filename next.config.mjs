/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true, // Типизированные маршруты (Next.js 14)
    optimizePackageImports: ['@pandacss/dev'],
  },
  eslint: {
    dirs: ['src'], // Проверять только src/
  },
  images: {
    formats: ['image/avif', 'image/webp'], // Оптимизация изображений
  },
};

export default nextConfig;
