# Environments

- Node : LTS / latest
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash`
  - `nvm install node`
- Package manager: pnpm
  - `npm install -g pnpm`

# How to run ?

1. `pnpm install`
2. `pnpm dev`
3. Navigate http://localhost:3000/

# Internal packages explain

- react: 18.3.0 [experimental](https://github.com/tienlx97/react-experimental/tree/www) version
- react-dom: 18.3.0 [experimental](https://github.com/tienlx97/react-dom-experimental/tree/www) version
- next: 14.0.4-canary.1 [custom](https://github.com/tienlx97/next-experimental/tree/14.0.4-canary.1) version

> How to install package:

```json
{
	// package.json
	"dependencies": {
		"react": "git://github.com/tienlx97/react-experimental.git#www",
		"react-dom": "git://github.com/tienlx97/react-dom-experimental.git#www",
		"next": "git://github.com/tienlx97/next-experimental.git#14.0.4-canary.1"
	},
	"devDependencies": {
		"@types/react": "latest",
		"@types/react-dom": "latest"
	}
}
```
