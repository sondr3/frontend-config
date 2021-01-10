"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = require("deepmerge");
const prettier_1 = require("../plugins/prettier");
const import_1 = require("../plugins/import");
const unicorn_1 = require("../plugins/unicorn");
const baseConfig = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    env: {
        es6: true,
    },
    extends: ["eslint:recommended"],
};
exports.default = deepmerge_1.all([baseConfig, prettier_1.settings, import_1.settings, unicorn_1.settings]);
