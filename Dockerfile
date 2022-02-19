# Base image
FROM node:13-alpine
# Where the app stays inside the container
WORKDIR /app
# Adding `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install app's dependencies and caching
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
# Starting the app
CMD ["npm", "start"]