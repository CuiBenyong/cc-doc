FROM node:14.17.0-slim
COPY ./ /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm run start


