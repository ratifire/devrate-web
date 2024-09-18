FROM node:20.11.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]
