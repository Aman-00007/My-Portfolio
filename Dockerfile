# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and build the app
COPY . .
RUN npm run build

# Production Stage (Serve with Nginx)
FROM nginx:alpine

# Copy custom Nginx configuration for single-page applications
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Vite assets from the build stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
