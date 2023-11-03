FROM node:16.17.1

WORKDIR /code

ADD package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
