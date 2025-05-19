/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Укажите ваши файлы
  ],
  experimental: {
    arbitraryValues: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
