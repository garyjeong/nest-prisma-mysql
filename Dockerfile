FROM node:16 AS builder

# Create app directory
WORKDIR /server

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install --force
COPY . .

RUN npm run build

FROM node:16 AS runner
# Copy the app code to the runner container
COPY --from=builder package*.json ./
COPY --from=builder /dist ./dist
COPY --from=builder /prisma ./prisma

EXPOSE 5000
CMD [ "npm run start" ]
