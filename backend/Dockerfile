FROM node:4.8.3-alpine

# dependencies for bcrypt, fiber etc.
RUN apk add --no-cache make gcc g++ python sudo

# default env before starting
ENV UI_ENDPOINT http://localhost:80
ENV ROOT_URL http://localhost:8080
ENV NODE_ENV production

# copy bundle
COPY .build/bundle /bundle

# ch into node app
WORKDIR /bundle/programs/server

# set upload volume for ostrio:file
VOLUME /bundle/programs/server/assets/app/uploads

# install dependencies
RUN npm install
RUN npm run install

# set default command to run the app
CMD node /bundle/main.js
