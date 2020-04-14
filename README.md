# Knex is cool

The main idea of this repo is to use knex for db communication. Instead of introducing the repository pattern, each query is represented by a function that takes db connection object and all other arguments.

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

## DB schema

```txt
  +------------+                     +-------------+
  | customers  |                     | orders      |
  +------------+ 1                 * +-------------+
  | id         |---------------------| id          |
  +------------+                     | customer_id |
                                     +-------------+
                                            |*
                                            |
                                            |
                                            |
                                            |
                                            |1
  +------------+                     +----------------+
  | products   |                     | product_orders |
  +------------+ 1                 * +----------------+
  | id         |---------------------| id             |
  +------------+                     | product_id     |
                                     | order_id       |
                                     +----------------+
```
