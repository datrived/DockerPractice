FROM node
RUN mkdir /DockerPractice
ADD . /DockerPractice
WORKDIR /DockerPractice
RUN npm i
EXPOSE 80
CMD ["npm", "start"]