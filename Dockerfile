# Use the official Node.js image from the Docker Hub, version 14
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to the host so that the application can be accessed
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "start"]