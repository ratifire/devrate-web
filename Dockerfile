FROM node:20.11.0 AS builder
WORKDIR /app
COPY .env ./server-build/.env
COPY server-build/package*.json ./
RUN npm install --production
COPY server-build /app
EXPOSE 3000
CMD ["node", "server.js"]