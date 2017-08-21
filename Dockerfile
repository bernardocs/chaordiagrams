FROM node:7
MAINTAINER Bernardo Santos

RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]