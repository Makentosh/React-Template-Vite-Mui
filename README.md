# Name project 🏢 

<p align="left">
<img src="https://img.shields.io/badge/node-node:14.16.1 alpine-blue" alt="Node.js">
</p>

## Getting Started from local

### Required

Docker Engine needs to be installed.

[Installation guide](https://docs.docker.com/engine/install)

### The first steps

1. Clone the repository

```
git clone 
```

2. Set the variables to .env (if it production build)
```
terminal command - cp .env.example .env
```
```
PROJECT_NGINX_NAME=
PROJECT_NODE_NAME=
PROJECT_PORT=
```
3. Set the variables to src/.env 

```
terminal command - cd/src cp .env.example .env
```
```
VITE_APP_API_URL=
VITE_APP_URL=
VITE_APP_TIMEZONE=
VITE_APP_PORT=3000
VITE_APP_LANGUAGE=
VITE_APP_VERSION=local/development/production
```

4. Build & up container
```
docker-compose -f docker-compose.development.yml up --build -d
```

5. Run containers after start again
```
docker-compose -f docker-compose.development.yml start
```
Add sonarcloud
