/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true, // Типизированные маршруты (Next.js 14)
  },
  eslint: {
    dirs: ['src'], // Проверять только src/
  },
  images: {
    formats: ['image/avif', 'image/webp'], // Оптимизация изображений
  },
};

export default nextConfig;
