FROM ses2/node:8

ENV ENV=dev

COPY ./app /app

RUN apk update
RUN npm install

WORKDIR /app