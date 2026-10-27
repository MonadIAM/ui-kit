.PHONY: tsc lint lint-fix knip secrets-check clean

tsc:
	pnpm run tsc
lint:
	pnpm run lint
lint-fix:
	pnpm run lint -- --fix
knip:
	pnpm run knip
secrets-check:
	pnpm run secrets:check
clean:
	rm -rf dist .cache *.tsbuildinfo
