# Steps from official doc: https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
FROM node:10.19.0

RUN apt-get update -y
RUN apt install fonts-roboto psmisc -y
# RUN apk add --no-cache git

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]