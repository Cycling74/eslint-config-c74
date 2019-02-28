import assert from "assert";
import { join } from "path";
import { CLIEngine } from "eslint";

import {
	extendsConfig,
	parser,
	plugins,
	parserOptions,
	rules
} from "../src/config";

const linter: CLIEngine = new CLIEngine({
	baseConfig: {
		"extends": extendsConfig
	},
	envs: ["node", "mocha"],
	extensions: [".ts"],
	parser,
	parserOptions,
	plugins,
	rules,
	useEslintrc: false
});

describe("ESLint", () => {

	const report: CLIEngine.LintReport = linter.executeOnFiles([
		__dirname,
		join(__dirname, "..", "src")
	]);

	console.log(report.results[1]);

	it("lints without errors", () => {
		assert.strictEqual(report.errorCount, 0);
	});

	it("lints without warnings", () => {
		assert.strictEqual(report.warningCount, 0);
	});
});

