FROM node:20.11.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 443
CMD [ "npm", "start" ]
