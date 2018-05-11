const config = require("./index.js");

module.exports = {

	// We are testing within a Node ES6 context
	env: {
		node: true,
		es6: true
	},

	globals: {
		"describe": true,
		"it": true,
	},

	"extends": "eslint:recommended",

	// Allow parsing of modern Node Code
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: "module"
	},

	rules: config.rules
};
