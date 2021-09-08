FROM node:16.8.0-alpine
ENV NODE_ENV=production

WORKDIR /metanoia

COPY ["package.json", "package-lock.json", "yarn.lock", "./"]

RUN npm install

ADD public public/
ADD src src/

CMD ["npm", "start"]
