FROM node:lts
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
ADD . /usr/src/app
RUN yarn global add nodemon typescript
EXPOSE 3000
CMD ["yarn", "start"]
