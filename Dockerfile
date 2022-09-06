# Stage1: Build de l'app
FROM node:lts-slim AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Build l'app pour la servir en prod (la sortie est du HTML, CSS, JS)
RUN npm run build

# Stage 2: Servir l'app
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
