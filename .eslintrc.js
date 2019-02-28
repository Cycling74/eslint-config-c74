const config = require("./lib/index.js");

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

	...config
};
