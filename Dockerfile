FROM node:20.11.0 AS builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]
