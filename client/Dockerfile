FROM node:alpine

WORKDIR /code

ADD package.json .
ADD package-lock.json .

RUN npm install

COPY . .

CMD ["npm","run","dev"]