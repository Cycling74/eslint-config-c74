# eslint-config-c74-ts
[![Build Status](https://travis-ci.org/Cycling74/eslint-config-c74.svg?branch=master)](https://travis-ci.org/Cycling74/eslint-config-c74)

This package provides the extensible Cycling '74 Typescript .eslintrc configuration.

## Installation

```sh
# npm
$ npm install --save-dev eslint typescript eslint-config-c74-ts
```

```sh
# yarn
$ yarn add --dev eslint typescript eslint-config-c74-ts
```
## Usage

In order to use the defined rules from within your project's contexts make sure you are extending the config provided by this package.

### JavaScript

```js
{
	"extends": ["c74-ts"],
	"rules": {
		// add any additonal rules you'd like to add/overwrite here
	}
}
```

## Rules

If you'd like to take a look at the detailed rule settings please refer to [this file](./src/index.ts) for common JS rules and the [this file]() for the Typescript specific settings.

## License

[MIT](./LICENSE)
