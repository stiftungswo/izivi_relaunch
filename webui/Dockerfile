FROM node:8-alpine
ENV NODE_ENV production
COPY . /bundle
WORKDIR /bundle
RUN npm install
CMD npm run start
