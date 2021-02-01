FROM node:15.2.0-alpine3.12

WORKDIR /usr/src/app

ARG NODE_ENV=development

ENV NODE_ENV=$NODE_ENV

COPY package*.json ./

RUN npm ci --production

COPY . .

CMD [ "node", "index.js" ]