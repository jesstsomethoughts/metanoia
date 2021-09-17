FROM node:14.16.1-alpine
ENV NODE_ENV=production

WORKDIR /metanoia

COPY ["package.json", "package-lock.json", "yarn.lock", "./"]

RUN npm install

ADD public public/
ADD src src/

CMD ["npm", "start"]
