# Use an official Node.js runtime as a parent image
FROM node:16-slim

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Bundle the app source inside the container
COPY . .

# Make the container's port 8080 available to the outside world
EXPOSE 8080

# Run the app when the container starts
CMD ["npm", "start"]
