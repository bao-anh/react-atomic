FROM node:14-alpine

WORKDIR /server

COPY server/package*.json /server/

RUN npm install

COPY ./server /server/

EXPOSE 5000

CMD ["npm", "start"]
