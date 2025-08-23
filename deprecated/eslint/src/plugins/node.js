module.exports = {
	env: { node: true },
	plugins: ["node"],
	extends: ["plugin:node/recommended-module"],
	rules: {
		// not needed because of the `import` plugin
		"node/no-missing-require": "off",
		"node/no-missing-import": "off",
		"node/no-extraneous-import": "off",
		"node/no-extraneous-require": "off",
	},
}
