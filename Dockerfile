# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the application files
COPY backend .

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["node", "app.js"]
