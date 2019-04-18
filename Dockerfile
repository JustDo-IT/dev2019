FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm install --only=production

COPY src /app

EXPOSE 3000
CMD [ "npm", "start" ]
