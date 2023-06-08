**Table of contents** 
${toc}

# Docker Setup for Postgresl and PgAdmin
## Requirements
First of all, you need to have `docker` and `docker-compose`, visit their official page for instruction.
## docker-compose.yml
```yml
version: '3.8'
services:
  database:
    container_name: pg_container 
    image: postgres
    restart: always 
    environment: 
      POSTGRES_USER: <postgres-user>
      POSTGRES_PASSWORD: <postgres-user-password>
      POSTGRES_DB: <database-name> 
    ports: 
      - "5432:5432"
  pgadmin:
    container_name: pgadmin_container 
    image: dpage/pgadmin4
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: <your-email>
      PGADMIN_DEFAULT_PASSWORD: <your-password>
    ports:
      - "5050:80"
```
Here is the meanings of different keys:
- `version`: specifies the version of the Docker Compose file format that the file adheres to.
- `services`: define the various services or containers that make up your application. Each service represents a separate component of your application, such as a web server, a database, or any other containerized service.
- `container_name`: name of the container when running 
- `image`: the name of the image from DockerHub 
- `environment`: environment variables
- `restart`: used to specify the restart policy for a service or container. 
When restart: always is set, it means that Docker will automatically restart the container if it exits or if the Docker daemon is restarted. This restart policy ensures that the container is always running, regardless of the reason for its previous termination.
- `ports`: map the ports of the container to the OS ports

## How to connect to PgAdmin ?
Open your browser and open the url: `locahost:5050`, enter your email and password specified in the `docker-compose.yml`
## How to create a database in PgAdmin ? 
Simply choose the option to `register a server`, one thing to note is for the field `hostname/address`, you should put in your `<container-name>`, don't put the actual address since when you re run it will be different ip.

## How to launch into the `postgres` container 
Simply use `docker exec`:
```bash
docker exec -it <container-name> -u <user> <database-name>
```
