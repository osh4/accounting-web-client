#Build
FROM node:lts-slim as build
WORKDIR /accounting-app
COPY . .
RUN npm install -g @angular/cli@latest && \
    npm install && \
    ng build

#Start
FROM nginx:alpine
COPY --from=build /accounting-app/dist/accounting-web-client /usr/share/nginx/html
EXPOSE 80/tcp
