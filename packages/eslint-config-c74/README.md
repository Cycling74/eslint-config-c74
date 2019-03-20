# eslint-config-c74
[![Build Status](https://travis-ci.org/Cycling74/eslint-config-c74.svg?branch=master)](https://travis-ci.org/Cycling74/eslint-config-c74)

This package provides the extensible Cycling '74 JavaScript .eslintrc configuration.

## Installation

```sh
# npm
$ npm install --save-dev eslint eslint-config-c74
```

```sh
# yarn
$ yarn add --dev eslint eslint-config-c74
```
## Usage

In order to use the defined rules from within your project's contexts make sure you are extending the config provided by this package.

### JavaScript

```js
{
	"extends": ["c74"],
	"rules": {
		// add any additonal rules you'd like to add/overwrite here
	}
}
```

## Rules

If you'd like to take a look at the detailed rule settings please refer to [this file](../eslint-config-base/src/config.ts).

## License

[MIT](./LICENSE)
