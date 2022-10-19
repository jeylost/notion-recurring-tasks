FROM node:lts-alpine

COPY . .

RUN apk add --no-cache tzdata

ENV TZ=Europe/Kiev

RUN yarn 

CMD [ "yarn", "start" ]
