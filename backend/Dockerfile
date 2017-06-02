FROM node:4.8.3-alpine
RUN apk add --no-cache make gcc g++ python sudo
ENV UI_ENDPOINT http://localhost:3000
ENV NODE_ENV production
COPY .build/bundle /bundle
WORKDIR /bundle/programs/server
RUN npm install
RUN npm run install
CMD node /bundle/main.js
