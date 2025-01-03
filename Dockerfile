FROM node:16-alpine

WORKDIR /app

COPY server.js package.json package-lock.json ./
COPY components ./components
COPY data ./data
COPY images ./images
COPY views ./views

# I'll make this dynamic next

#COPY data_json ./data_json

# Install dependencies *inside* the container
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app listens on
EXPOSE 3030

# Define the command to run your app (as before)
CMD ["/bin/sh", "-c", "PORT=3030 npm start"]
