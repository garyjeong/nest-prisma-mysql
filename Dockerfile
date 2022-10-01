FROM node:16 AS builder

# Create app directory
WORKDIR /server

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install --force
COPY . .

RUN npm build

FROM node:16 AS runner
# Copy the app code to the runner container
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 5000
CMD [ "npm run start" ]