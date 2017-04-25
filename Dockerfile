# create a file named Dockerfile
FROM node:7

# Install nodemon for development
RUN npm install -g nodemon
RUN npm install --save express

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

CMD ["nodemon", "-L", "/usr/src/app"]