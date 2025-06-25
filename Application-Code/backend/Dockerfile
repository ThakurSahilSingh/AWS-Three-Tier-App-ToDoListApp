# FROM node:14
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD ["node", "index.js"]
FROM node:14

# Install MySQL CLI
RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Copy package files and install dependencies (including mysql)
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

CMD ["node", "index.js"]
