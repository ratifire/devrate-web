@echo off
set CONTAINER_NAME=devrate-web
set IMAGE_NAME=devrate-web-image

docker stop %CONTAINER_NAME%
docker rm %CONTAINER_NAME%

docker build -t %IMAGE_NAME% .

docker run -d --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%
