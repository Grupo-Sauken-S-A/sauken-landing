# Dockerfile
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Set the environment variable to run the Next.js application in production mode
ENV PORT 4002

# Build the Next.js application for production
RUN npm run build

# Expose the port that the application will run on
EXPOSE 4002

# Start the application
CMD ["npm", "run", "start"]
