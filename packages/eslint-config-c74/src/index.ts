import { Linter } from "eslint";

// const OFF: Linter.RuleLevel = 0;
// const ERROR: Linter.RuleLevel = 2;

interface LinterConfig {
	extends: string[];
	parser: string;
	plugins?: string[];
	rules?: { [s: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions };
}

const config: LinterConfig = {
	"extends": ["c74-base"],
	parser: "babel-eslint"
};

export = config;
