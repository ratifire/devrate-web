FROM node:20.11.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
COPY --from=builder /app .
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
