# Use a Node base image
FROM node:21.5.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --ignore-engines

# Bundle app source
COPY . .

# Build the TypeScript app
RUN yarn build

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 8080

CMD [ "node", "build/main.js" ]
