FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

WORKDIR /usr/src/app

COPY . .

RUN yarn install


RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
