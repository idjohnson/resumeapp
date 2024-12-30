FROM node:16-alpine

WORKDIR /app

COPY server.js package.json package-lock.json ./
COPY components ./components
COPY data ./data
COPY images ./images
COPY views ./views

# I'll make this dynamic next

COPY data_json ./data_json

# Install serve or a similar tool to serve static content.  Nginx could also be used.
RUN npm install -g serve

CMD ["serve", "-s", "start"]
