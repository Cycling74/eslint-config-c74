import {
	extendsConfig,
	parser,
	plugins,
	parserOptions,
	rules,

	typescriptExtendsConfig,
	typescriptParser,
	typescriptParserOptions,
	typescriptPlugins,
	typescriptRules

} from "./config";

export const jsConfig = {
	"extends": extendsConfig,
	parser,
	parserOptions,
	plugins,
	rules
};


export const tsConfig = {
	"extends": typescriptExtendsConfig,
	parser: typescriptParser,
	parserOptions: typescriptParserOptions,
	plugins: typescriptPlugins,
	rules: typescriptRules
};
