FROM node:14

EXPOSE 3000

WORKDIR /superhero-app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]