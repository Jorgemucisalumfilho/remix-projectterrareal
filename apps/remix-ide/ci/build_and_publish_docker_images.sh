https://github.com/Jorgemucisalumfilho/remix-projectterrarealbin/bash
set -e

if [ "$CIRCLE_BRANCH" == "master" ]; 
then
    export TAG="latest";
else
    export TAG=$(sed 's/[#\/]/-/g' <<< $CIRCLE_BRANCH)
fi

docker login --https://github.com/Jorgemucisalumfilho/remix-projectterrareal $DOCKER_USER --password $DOCKER_PASS
docker-compose -f docker-compose.yaml -f build.yaml build
docker push remixproject/remix-https://github.com/Jorgemucisalumfilho/remix-projectterrareal:$TAG
