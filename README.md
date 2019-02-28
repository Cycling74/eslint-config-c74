# eslint-config-c74
[![Build Status](https://travis-ci.org/Cycling74/eslint-config-c74.svg?branch=master)](https://travis-ci.org/Cycling74/eslint-config-c74)
Cycling '74 Recommended sharebale ESLint Configuration for simple inclusion in your project.

## Installation

```sh
# npm
$ npm install --save-dev eslint eslint-config-c74
```

```sh
# yarn
$ yarn add --dev eslint eslint-config-c74
```
## Using it
In order to use the defined rules from within your project's contexts make sure you are extending the config in the appropriate way.
This package supports two different sets of configs:

### JavaScript

```js
{
	"extends": "c74",
	"rules": {
		// add any additonal rules you'd like to add/overwrite here
	}
}
```

### Typescript
```js
{
	"extends": "c74/ts-config",
	"rules": {
		// add any additonal rules you'd like to add/overwrite here
	}
}
```

Also, please be aware that the C74 ESLint Config extends the `eslint:recommended` settings and just adds/adjusts some rules. Please refer to [this file](src/index.ts)to get an understanding of the rules at play.

*Important* In order to ensure that rules work as expected from within your context please set any desired plugins, parserOptions and globals in your project's local eslint config.

## License

[MIT](LICENSE)
