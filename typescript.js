module.exports = {
  extends: './index.js',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        /*
            3-in-1
            – Sets parser to '@typescript-eslint/parser'
            – Adds '@typescript-eslint' plugin
            – Enables recommended set of rules
        */
        'plugin:@typescript-eslint/recommended',

        /*
            Some `import/*` values overrides, related to types
            and additional file extensions

            [Note]
            Configuration seems strange, pay close attention
            if any troubles appear
            https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
        */
        'plugin:import/typescript',

        /*
            Disables related rules from the `@typescript-eslint` plugin
            in favor of custom handling
        */
        'prettier/@typescript-eslint',
      ],
      rules: require('./rules/typescript'),
    },
  ],
};
