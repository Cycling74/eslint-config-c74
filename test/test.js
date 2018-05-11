const assert = require("assert");
const { join } = require("path");
const { CLIEngine: ESLintEngine } = require("eslint");

const { rules } = require("../index.js");
const { env, globals, parserOptions } = require("../.eslintrc.js");

const keyedObjectToArray = (obj) => {
	return Object.keys(obj).reduce((sum, key) => {
		obj[key] && sum.push(key);
		return sum;
	}, []);
};

const linter = new ESLintEngine({

	// We are testing within a Node ES6 context
	envs: keyedObjectToArray(env),

	globals: keyedObjectToArray(globals),

	// Allow parsing of modern Node Code
	parserOptions,

	rules,

	// Disable auto loading of any eslint config files and load local ones
	useEslintrc: false

});

describe("ESLint", () => {

	const r = linter.executeOnFiles([
		__filename,
		join(__dirname, "..")
	]);

	it("lints without errors", () => {
		assert.strictEqual(r.errorCount, 0);
	});

	it("lints without warnings", () => {
		assert.strictEqual(r.warningCount, 0);
	});
});

