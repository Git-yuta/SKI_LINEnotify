# node-train-delay
notification for train delaying

## start container
```
export LINE_TOKEN='{token}'  # set line notify token
docker-compose up -d
docker-compose ps
```

## run line notify
```
docker exec -it node8-line-notify node index.js
```

## login container
```
docker exec -it node8-line-notify /bin/sh
```

## check logs
```
docker logs node8-line-notify
```



## update docker image
```
docker login
docker-compose build --no-cache
docker-compose push
```



