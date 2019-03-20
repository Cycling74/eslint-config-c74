import assert from "assert";
import { join } from "path";
import { CLIEngine } from "eslint";
import { EOL } from "os";

describe("ESLint JavaScript", () => {

	let linter: CLIEngine;
	let report: CLIEngine.LintReport;

	before(() => {

		linter = new CLIEngine({
			baseConfig: {
				"extends": "c74"
			},
			ignore: false,
			useEslintrc: false
		});

		report = linter.executeOnFiles([
			join(__dirname, "..", ".eslintrc.js"),
			join(__dirname, "..", "scripts")
		]);
	});

	it("lints JS without errors", () => {
		assert.strictEqual(report.errorCount, 0);
	});

	it("lints JS without warnings", () => {
		assert.strictEqual(report.warningCount, 0);
	});

	after(() => {
		if (report.errorCount || report.warningCount) {
			console.log(`${EOL}Linting report:${EOL}`);
			console.log(linter.getFormatter()(report.results));
		}
	});
});
