FROM node:alpine AS build
WORKDIR /usr/app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build