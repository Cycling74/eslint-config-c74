import assert from "assert";
import { join } from "path";
import { CLIEngine } from "eslint";
import { EOL } from "os";

describe("ESLint TypeScript", () => {

	let linter: CLIEngine;
	let report: CLIEngine.LintReport;

	before(() => {

		linter = new CLIEngine({
			baseConfig: {
				"extends": "c74-ts"
			},
			extensions: [".ts"],
			useEslintrc: false
		});

		report = linter.executeOnFiles([
			__dirname,
			join(__dirname, "..", "packages", "eslint-config-c74-base", "src"),
			join(__dirname, "..", "packages", "eslint-config-c74", "src"),
			join(__dirname, "..", "packages", "eslint-config-c74-ts", "src")
		]);
	});

	it("lints TS without errors", () => {
		assert.strictEqual(report.errorCount, 0);
	});

	it("lints TS without warnings", () => {
		assert.strictEqual(report.warningCount, 0);
	});

	after(() => {
		if (report.errorCount || report.warningCount) {
			console.log(`${EOL}Linting report:${EOL}`);
			console.log(linter.getFormatter()(report.results));
		}
	});
});
