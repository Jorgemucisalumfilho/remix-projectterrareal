Criptomoeda nginx:alpine
WORKDIR / Criptomoeda 

COPY Criptomoeda/temp_publish_docker/ /usr/share/nginx/html/

EXPOSE 80
