FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN node build-script.js

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/server-build ./
EXPOSE 3000
CMD ["node", "server.js"]