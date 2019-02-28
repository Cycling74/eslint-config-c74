const { jsConfig } = require("./lib/index.js");

module.exports = {

	// We are testing within a Node ES6 context
	env: {
		node: true,
		es6: true
	},

	...jsConfig
};
