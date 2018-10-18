# eslint-config-c74
Cycling '74 Recommended sharebale ESLint Configuration for simple inclusion in your project.

## Installation
*Note* This Repo is private and therefore only accessible for people with C74 Github access as of now.

```sh
# npm
$ npm install --save-dev eslint eslint-config-c74
```

```sh
# yarn
$ yarn add --dev eslint eslint-config-c74
```
## Using it
In order to use the defined rules from within your project's contexts make sure you are extending the config:

```js
{
	"extends": "c74",
	"rules": {
		// add any additonal rules you'd like to add/overwrite here
	}
}
```

Also, please be aware that the C74 ESLint Config extends the `eslint:recommended` settings and just adds/adjusts some rules. Please refer to [this file](index.js) to get an understanding of the rules at play.

*Important* In order to ensure that rules work as expected from within your context please set any desired plugins, parserOptions and globals in your project's local eslint config.

## License

[MIT](LICENSE)
