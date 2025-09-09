# Simple Dockerfile for Next.js App
FROM node:lts-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/dreckly/package*.json ./apps/dreckly/
COPY libs/ ./libs/

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npx nx build dreckly

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Change to the standalone directory and start the application
WORKDIR /app/apps/dreckly/.next/standalone
CMD ["node", "apps/dreckly/server.js"]