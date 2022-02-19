FROM node:13-alpine

WORKDIR /usr/devices-list-app

COPY package.json tsconfig.json ./
RUN npm install --silent
RUN npm install react-scripts@3.3.1 typescript -g --silent
COPY . .

EXPOSE 3000

CMD ["npm", "-g", "start"]