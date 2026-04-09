import config from "@sondr3/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
	extends: [config],
	ignorePatterns: ["**/deprecated/**"],
	rules: {
		"import/no-default-export": "off",
	},
});
