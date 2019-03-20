import { Linter } from "eslint";

const OFF: Linter.RuleLevel = 0;
const ERROR: Linter.RuleLevel = 2;

interface LinterConfig {
	extends: string[];
	parser: string;
	plugins?: string[];
	rules?: { [s: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions };
}

const config: LinterConfig  = {
	"extends": ["c74-base", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	rules: {
		// Typescript Plugin Rules
		// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

		"camelcase": OFF,
		"@typescript-eslint/camelcase": OFF,

		"indent": OFF,
		"@typescript-eslint/indent": [ERROR, "tab", { SwitchCase: 1 }],

		"no-unused-vars": OFF,
		"@typescript-eslint/no-unused-vars": [ERROR, {
			"vars": "local",
			"args": "none",
			"ignoreRestSiblings": false
		}],

		"@typescript-eslint/explicit-member-accessibility": OFF
	}
};

export = config;
