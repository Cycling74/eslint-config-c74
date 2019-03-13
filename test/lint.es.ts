import assert from "assert";
import { join } from "path";
import { CLIEngine } from "eslint";

describe("ESLint JavaScript", () => {

	const jsLinter: CLIEngine = new CLIEngine({
		baseConfig: {
			"extends": "c74"
		},
		ignore: false,
		useEslintrc: false
	});

	const report: CLIEngine.LintReport = jsLinter.executeOnFiles([
		join(__dirname, "..", ".eslintrc.js")
	]);

	it("lints JS without errors", () => {
		assert.strictEqual(report.errorCount, 0);
	});

	it("lints JS without warnings", () => {
		assert.strictEqual(report.warningCount, 0);
	});
});

