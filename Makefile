CONFIG = .config

all: node

node: node_modules

node_modules: package.json
	bun install

fetch: node
	@bun run ./script/fetch.js

lint: node
	@bunx redocly lint --max-problems=200 \
	--config=$(CONFIG)/redocly.yaml \
	$(shell find . -maxdepth 1 -type f -name '*.yml')

clean:
	@rm -rf node_modules

re: clean all

.PHONY: all fetch lint clean re
