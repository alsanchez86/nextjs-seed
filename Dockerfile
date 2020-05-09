FROM node:10.20.1-alpine3.11

ARG PRIVATE_PROTOCOL
ARG PRIVATE_HOSTNAME
ARG PRIVATE_PORT
ARG PRIVATE_CONTEXT
ARG PUBLIC_PROTOCOL
ARG PUBLIC_HOSTNAME
ARG PUBLIC_PORT
ARG PUBLIC_CONTEXT

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json .
COPY package-lock.json .
RUN npm i

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD ["npm", "run", "start"]