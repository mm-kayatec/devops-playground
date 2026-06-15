FROM node:22 AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .


FROM node:22

WORKDIR /app

COPY --from=builder /app .

USER node

EXPOSE 3000

CMD ["node", "server.js"]

HEALTHCHECK CMD node -e "fetch('http://localhost:3000').then(()=>process.exit(0)).catch(()=>process.exit(1))"
