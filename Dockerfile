FROM node:latest

EXPOSE 3002

ARG node_env
ENV NODE_ENV $node_env

RUN mkdir -p /backend
WORKDIR /backend

COPY . /backend

RUN npm install

CMD npm run dev