FROM node:latest

EXPOSE 3002

RUN mkdir -p /backend
WORKDIR /backend

COPY . /backend

RUN npm install

CMD npm run dev