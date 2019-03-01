import assert from "assert";
import { join } from "path";
import { CLIEngine } from "eslint";

import {
	extendsConfig,
	envConfig,
	parser,
	plugins,
	parserOptions,
	rules,

	typescriptExtendsConfig,
	typescriptEnvConfig,
	typescriptParser,
	typescriptPlugins,
	typescriptParserOptions,
	typescriptRules
} from "../src/config";

const objectKeysToArray = (env: { [name: string]: boolean }): string[] => {

	const keys: string[] = Object.keys(env);
	const result: string[] = [];

	for (let i = 0, il = keys.length; i < il; i++) {
		if (env[keys[i]]) result.push(keys[i]);
	}
	return result;
};


describe("ESLint JavaScript", () => {

	const jsLinter: CLIEngine = new CLIEngine({
		baseConfig: {
			"extends": extendsConfig
		},
		envs: objectKeysToArray(envConfig),
		extensions: [".js"],
		parser,
		parserOptions,
		plugins,
		rules,
		useEslintrc: false
	});

	const report: CLIEngine.LintReport = jsLinter.executeOnFiles([
		join(__dirname, "..", "index.js"),
		join(__dirname, "..", "ts-config.js")
	]);

	it("lints JS without errors", () => {
		assert.strictEqual(report.errorCount, 0);
	});

	it("lints JS without warnings", () => {
		assert.strictEqual(report.warningCount, 0);
	});
});

describe("ESLint TypeScript", () => {

	const tsLinter: CLIEngine = new CLIEngine({
		baseConfig: {
			"extends": typescriptExtendsConfig
		},
		envs: objectKeysToArray(typescriptEnvConfig),
		extensions: [".ts"],
		parser: typescriptParser,
		parserOptions: typescriptParserOptions,
		plugins: typescriptPlugins,
		rules: typescriptRules,
		useEslintrc: false
	});

	const report: CLIEngine.LintReport = tsLinter.executeOnFiles([
		__dirname,
		join(__dirname, "..", "src")
	]);

	it("lints TS without errors", () => {
		assert.strictEqual(report.errorCount, 0);
	});

	it("lints TS without warnings", () => {
		assert.strictEqual(report.warningCount, 0);
	});
});

