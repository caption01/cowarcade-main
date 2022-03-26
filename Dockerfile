FROM node:16-alpine

RUN apk update && apk add --no-cache bash

ARG NODE_ENV

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

ENV PHASE_BUILD $PHASE_BUILD
ENV CONFIGURATION $CONFIGURATION

EXPOSE 3000

CMD ["npm", "run", "dev"]