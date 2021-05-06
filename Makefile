.PHONY: up down run

up:
	./tools/setup.sh

down:
	./tools/teardown.sh

run:
	npm start
