/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"],
        indent: [0, 4],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: [
            "error",
            "double",
            { allowTemplateLiterals: true, avoidEscape: true }
        ]
    }
};
