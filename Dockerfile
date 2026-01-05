# Multi-stage Docker build for Angular application

# Stage 1: Build the Angular application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the Angular application for production
RUN npm run build -- --configuration production

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from builder stage
# Angular 19 outputs to dist/portfolio/browser
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html

# Expose port 6328
EXPOSE 6328

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:6328/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
