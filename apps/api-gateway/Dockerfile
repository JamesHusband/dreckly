# Simple Dockerfile for API Gateway
FROM node:lts-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/api-gateway/package*.json ./apps/api-gateway/
COPY libs/ ./libs/

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npx nx build api-gateway

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "apps/api-gateway/dist/main.js"]