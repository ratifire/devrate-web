FROM node:20.11.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

FROM node:20.11.0
WORKDIR /app
COPY --from=builder /app .
COPY . .
EXPOSE 3000
CMD ["npm", "start"]