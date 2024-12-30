FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY components ./components
COPY data ./data
COPY images ./images
COPY views ./views

#RUN npm run build

# Production stage
FROM node:16-alpine as production

WORKDIR /app

#COPY --from=builder /app/build ./build
#COPY --from=builder /app/public ./public

# If you have images or other assets in a folder like 'images', copy it

COPY components ./components
COPY data ./data
COPY images ./images
COPY views ./views

# Install serve or a similar tool to serve static content.  Nginx could also be used.
RUN npm install -g serve

CMD ["serve", "-s", "start"]
