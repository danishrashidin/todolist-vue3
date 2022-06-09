FROM node:16

# Set working directory of our container to be the '/server' within container
WORKDIR /vue-app

# copy dependency into our image to './' = working directory
COPY package.json ./

# install our dependency into the container when buidling the image
RUN npm install --silent

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

# update latest version of npm
RUN npm install -g npm@latest npm-check-updates --silent

# copy all server files to './' = working directory
COPY . ./

# expose container to port 3000
EXPOSE 3000

# command run by container
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "build"]

