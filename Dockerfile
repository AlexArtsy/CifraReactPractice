# Используем официальный образ Node.js для сборки
FROM node:18-alpine as builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Используем nginx для serving статики
FROM nginx:alpine

# Копируем собранные файлы из builder в nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг nginx (если нужно изменить порт или другие настройки)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 4000 (вместо стандартного 80)
EXPOSE 4000

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]