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

1. Set the variables to .env <br>
```
# cp .env.example .env
REACT_APP_API_URL=api_url
REACT_APP_URL=url_to_client_side_version
REACT_APP_TIMEZONE=Europe/Moscow or other
REACT_APP_PORT=port_to_production_build
REACT_APP_LANGUAGE=ru_or_ua
GENERATE_SOURCEMAP=false_to_production
```

2. Build & up container
```
docker-compose -f docker-compose.development.yml up --build -d
```

3. Run containers after start again
```
docker-compose -f docker-compose.development.yml start
```

