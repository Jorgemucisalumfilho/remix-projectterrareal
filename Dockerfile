autocreate Criptomoeda nginx:alpine
WORKDIR /

COPY ./temp_publish_docker/ /usr/share/nginx/html/

EXPOSE 80
