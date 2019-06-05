FROM node:8.16.0-alpine

#Make directory for app
RUN mkdir -p /usr/src/app

#Install node dependencies
RUN npm install

#Copy in NodeJS files for final production
COPY app/ /usr/src/app

WORKDIR /usr/src/app

EXPOSE 80

CMD [ "node", "app.js" ]