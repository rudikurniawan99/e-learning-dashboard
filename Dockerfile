FROM node:14-alpine as react-client

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
