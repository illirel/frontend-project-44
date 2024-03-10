
install:
	npm ci
brain-even:
	node games/brain-even.js
brain-games:
	node bin/brain-games.js
brain-calc:
	node games/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint
