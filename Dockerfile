FROM node:20.11.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm run build
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
