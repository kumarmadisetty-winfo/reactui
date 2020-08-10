FROM node:jessie as build-stage
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm cache clean --force
RUN npm --verbose install --only=prod
RUN npm audit fix
ARG REACT_APP_ENV=docker
ENV REACT_APP_ENV=docker
COPY . /usr/src/app
RUN ls -al
RUN npm run build
FROM nginx:alpine
RUN ls -al
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
VOLUME /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]