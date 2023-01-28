start:
			npm run dev
install:
			npm ci
build:
			npm run build
publish:
			npm run deploy
lint:
			npx eslint . --ext .js,.jsx,.ts,.tsx
fix:
			npx eslint --fix . --ext .js,.jsx,.ts,.tsx