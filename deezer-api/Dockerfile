FROM node:current-alpine3.10

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]