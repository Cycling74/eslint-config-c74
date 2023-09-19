import assert from "assert";
import { join } from "path";
import { ESLint } from "eslint";
import { EOL } from "os";

describe("ESLint TypeScript", () => {

	let linter: ESLint;
	let results: ESLint.LintResult[];
	let errorCount = 0;
	let warningCount = 0;

	before(async () => {

		linter = new ESLint({
			baseConfig: {
				"extends": "c74",
				parserOptions: {
					requireConfigFile: false
				}
			},
			ignore: false,
			useEslintrc: false
		});

		results = await linter.lintFiles([
			join(__dirname, "..", ".eslintrc.js"),
			join(__dirname, "..", "scripts")
		]);

		errorCount = results.reduce((sum, result) => sum + result.errorCount + result.fatalErrorCount, 0);
		warningCount = results.reduce((sum, result) => sum + result.warningCount, 0);
	});

	it("lints TS without errors", () => {
		assert.strictEqual(errorCount, 0);
	});

	it("lints TS without warnings", () => {
		assert.strictEqual(warningCount, 0);
	});

	after(() => {
		if (errorCount || warningCount) {
			console.log(`${EOL}Linting report:${EOL}`);
			console.log(results.map(r => r.messages.map(m => JSON.stringify(m, null, 2)).join("\n")));
		}
	});
});
