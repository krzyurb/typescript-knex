DOCKER_COMPOSE = docker-compose

up:
	$(DOCKER_COMPOSE) up -d --remove-orphans

logs:
	$(DOCKER_COMPOSE) logs -f $(filter-out $@,$(MAKECMDGOALS))

down:
	$(DOCKER_COMPOSE) down

migrate-latest:
	@echo "Run latest migrations..."
	$(DOCKER_COMPOSE) run --rm example-app yarn db:migrate:latest
