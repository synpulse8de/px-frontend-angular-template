# Build stage
FROM node:18.16-alpine as build

WORKDIR /usr/local/app

COPY package.json pnpm-lock.yaml ./
COPY ./ /usr/local/app/

RUN npm install -g pnpm
RUN pnpm install
#RUN pnpm install --force # this command may be needed to be used instead of pnpm install above if build fails in some cases with windows machine (wrong dependency symlinks)
RUN pnpm run build

# Nginx stage
FROM nginxinc/nginx-unprivileged:latest

COPY --from=build /usr/local/app/dist/pulse8-yourname-frontend /usr/share/nginx/html
COPY ./src/assets/configs/nginx.conf /etc/nginx/nginx.conf

USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
