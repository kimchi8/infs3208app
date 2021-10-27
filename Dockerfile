FROM node:latest
LABEL maintainer="Kim Gao <s4606920@uq.edu.au>"
LABEL name="Kim Gao"
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ['npm', 'start']
