module.exports = {
  corePlugins: {
    preflight: false, // Отключает сброс стилей Tailwind
  },
  prefix: 'tw-', // Все классы Tailwind теперь требуют префикса tw-
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/@mantine/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
