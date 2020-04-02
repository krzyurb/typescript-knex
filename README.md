# Knex is cool

The main idea of this repo is to use knex for db communication. Instead of introducing repository pattern each query is represented by function that takes db connection object and all other arguments.

## TODO

* CRUD of _Products_
* Tests

## Running locally

To start app type:

```sh
make up
```

It will setup whole environment using docker-compose.

Show logs:

```sh
make logs
```

Shut down:

```sh
make down
```
