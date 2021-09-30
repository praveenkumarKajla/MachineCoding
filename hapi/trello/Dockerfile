#Specify a base image
FROM node:alpine

#Specify a working directory
WORKDIR /usr/src/app
COPY . /usr/src/app

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install -g nodemon
RUN npm install 

ENTRYPOINT ["nodemon"]
