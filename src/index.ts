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
	typescriptParserOptions,
	typescriptPlugins,
	typescriptRules

} from "./config";

export const jsConfig = {
	"extends": extendsConfig,
	env: envConfig,
	parser,
	parserOptions,
	plugins,
	rules
};


export const tsConfig = {
	"extends": typescriptExtendsConfig,
	env: typescriptEnvConfig,
	parser: typescriptParser,
	parserOptions: typescriptParserOptions,
	plugins: typescriptPlugins,
	rules: typescriptRules
};
