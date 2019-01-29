#!/bin/bash
DOCKER_IMAGE=superlogical/docker-nodejs-swagger-travisci:$TRAVIS_BUILD_NUMBER

docker build -t $DOCKER_IMAGE .
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push $DOCKER_IMAGE