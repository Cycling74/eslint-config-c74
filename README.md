# eslint-config-c74
[![Build Status](https://travis-ci.org/Cycling74/eslint-config-c74.svg?branch=master)](https://travis-ci.org/Cycling74/eslint-config-c74)

Cycling '74 Project for recommended, sharebale ESLint Configuration for simple inclusion in your project. This is a Monorepo containing multiple packages in the `packages` folder. For ease of use you find the deployed packages on npm

* [eslint-config-c74](https://www.npmjs.com/package/eslint-config-c74) - The ESlint config for JS projects
* [eslint-config-c74-ts](https://www.npmjs.com/package/eslint-config-c74) - The ESlint config for Typescript projects

## Dev Setup

### Install Dependencies and set up Monorepo

```sh
$> yarn install
```

### Testing
```sh
$> yarn run test
```

### Publishing

```sh
# login using the interactive npm login cmd
$> npm login

# set the new version
$> yarn version <version>

# then publish
$> yarn run publish
```

## License

[MIT](LICENSE)
