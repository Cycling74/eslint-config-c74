import assert from "assert";
import { join } from "path";
import { CLIEngine } from "eslint";

describe("ESLint TypeScript", () => {

	const tsLinter: CLIEngine = new CLIEngine({
		baseConfig: {
			"extends": "c74-ts"
		},
		extensions: [".ts"],
		useEslintrc: false
	});

	const report: CLIEngine.LintReport = tsLinter.executeOnFiles([
		__dirname,
		join(__dirname, "..", "packages", "eslint-config-c74-base", "src"),
		join(__dirname, "..", "packages", "eslint-config-c74", "src"),
		join(__dirname, "..", "packages", "eslint-config-c74-ts", "src")
	]);

	it("lints TS without errors", () => {
		assert.strictEqual(report.errorCount, 0);
	});

	it("lints TS without warnings", () => {
		assert.strictEqual(report.warningCount, 0);
	});
});

