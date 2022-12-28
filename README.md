# Accounting Web Client
Web client for the Accounting app. Backend part could be found in [another repo](https://github.com/osh4/accounting)
## Prerequisites
- Install docker & git
- Add your ssh key to your Github profile

## Production ready build
- Get repo
``` bash
$ git clone git@github.com:osh4/accounting-web-client.git
```
- Build docker image
``` bash
$ docker build . -t accounting-web-client --no-cache
```
- Run docker container
``` bash
$ docker run -d --name accounting-web-client -p 80:80 accounting-web-client
```

## Dev local build
- Get repo
``` bash
$ git clone git@github.com:osh4/accounting-web-client.git
```
- Install dependencies
``` bash
$ npm install
```
- Start dev server
``` bash
# dev server with hot reload at http://localhost:4200
$ npm start
```
