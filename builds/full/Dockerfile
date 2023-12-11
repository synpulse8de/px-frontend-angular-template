# Build stage
FROM node:18.16-alpine as build
WORKDIR /usr/local/app
COPY package.json pnpm-lock.yaml ./
COPY ./ /usr/local/app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

# Nginx stage
FROM nginx:latest
COPY --from=build /usr/local/app/dist/pulse8-yourname-frontend /usr/share/nginx/html
COPY ./build_for_docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
