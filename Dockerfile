# Use a specific Node.js version that is compatible with Strapi
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache for better build performance
COPY package*.json ./

# Install dependencies using npm ci (for a clean and deterministic install)
RUN npm ci

# Build the Strapi admin panel
RUN npm run build

# Copy the rest of your application code
COPY . .

RUN npm run build

# Expose the port that Strapi runs on
EXPOSE 1337

# Set environment variables (optional, adjust as needed)
ENV NODE_ENV=production

# Start Strapi
CMD ["npm", "start"]
