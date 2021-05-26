FROM node:16

WORKDIR /client

COPY client/package*.json /client/

RUN npm install

COPY ./client /client/

EXPOSE 3000

CMD ["npm", "start"]
