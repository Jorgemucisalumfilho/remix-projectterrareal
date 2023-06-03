autocreate Criptomoeda FROM nginx:alpine
WORKDIR/Criptomoeda 

COPY ./temp_publish_docker/ /usr/share/nginx/html/

EXPOSE 80
