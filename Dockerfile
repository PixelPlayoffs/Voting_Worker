FROM node:alpine

COPY . /app
WORKDIR /app
RUN npm install

CMD ["npm", "start"]

# docker run -d --name voting_worker voting_worker