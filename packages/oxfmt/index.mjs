/** @type import("oxfmt").OxfmtConfig */
export default {
	ignorePatterns: ["**/__generated__/**", "**/__snapshots__/**", "**dist**", "**/coverage/**"],
	endOfLine: "lf",
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	sortPackageJson: true,
	sortImports: {
		internalPattern: ["~/", "#/"],
		newlinesBetween: true,
	},
};
