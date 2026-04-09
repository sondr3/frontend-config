import { OxlintConfig } from "oxlint"

export const config: OxlintConfig = {
	ignorePatterns: ["**/__generated__/**", "**/__snapshots__/**", "**dist**", "**/coverage/**"],
	plugins: ["eslint", "import", "typescript", "oxc", "node", "promise", "unicorn"],
	categories: {
		correctness: "error",
		suspicious: "error",
		restriction: "error",
		perf: "warn",
	},
	rules: {
		"typescript/array-type": ["error", { default: "generic" }],
		"unicorn/filename-case": ["error", { case: "kebabCase" }],
		"oxc/no-async-await": "off",
		"oxc/no-rest-spread-properties": "off",
		"eslint/no-unused-vars": [
			"error",
			{
				args: "all",
				argsIgnorePattern: "^_",
				caughtErrors: "all",
				caughtErrorsIgnorePattern: "^_",
				destructuredArrayIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
		"unicorn/prefer-date-now": "error",
	},
	options: {
		typeAware: true,
	},
}
