FROM node:alpine

ENV NODE_ENV=develop
ENV PORT=3000

WORKDIR /var/www
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE $PORT
ENTRYPOINT  ["npm", "start"]
