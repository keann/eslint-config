module.exports = {
  env: {
    browser: true,
    es2020: true /* Also sets `parserOptions.ecmaVersion: 11` */,
    jest: true,
    node: true /* Also sets `parserOptions.globalReturn: true` */,
  },

  globals: require('./globals'),

  settings: {
    /*
        Used by `no-useless-path-segments` w/ `noUselessIndex` option
        to determine which index-files to consider as such.
        Obviously doesn't contain `.jsx` as `index` mostly should
        just re-export things from named files nearby.
    */
    'import/extensions': ['.js', '.json'],

    /*
        Resolvers try to process a given file import
        in the order they're listed below, until the file ain't found
    */
    'import/resolver': {
      /*
          Built-in, just based on node's resolving behavior.
          Extensions are used to determine which files to process.
      */
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json'],
      },

      /*
          Also built-in, tries to find a webpack config
          and use resolving options and rules defined there.
          If config is not found, empty `{}` is used by default.
      */
      webpack: {
        /*
            In case config is a function, custom `mode` is provided
            to distinguish whether it's called by linter
        */
        argv: { mode: 'lint' },
      },
    },

    /*
        No warnings will be thrown on any import with paths
        matching pattern(s) in this option (e.g. if the imported
        module doesn't contain corresponding named exports).
        Not to be confused with checks for the existance of the module itself
        by `no-unresolved` rule which has its own `ignore` option.

        [Note]
        Airbnb includes `.json` here, but it seems to work otherwise too
    */
    'import/ignore': ['\\.(css|less)$'],

    /*
        Additional global environment modules (such as node's `fs`)
        which resolvers aren't aware of by default
    */
    'import/core-modules': [],

    react: {
      /*
          Will default to that in the future, meanwhile another explicit option
      */
      version: 'detect',
    },
  },

  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      /*
          Makes eslint analyze modules as if strict-mode is enabled
          for them even if it's not (no such directive is set in the code).
          Thus the directive may (should) not be used (`strict` rule)
          while this option is set to true.
      */
      impliedStrict: true,

      /*
          Not quite ecma feature, but still needed for enabling JSX parsing
      */
      jsx: true,

      /*
          Is needed until babel-eslint updates to v11.
          Related to the old mess with different decorator proposals' syntax.
      */
      legacyDecorators: true,
    },
  },

  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'no-use-extend-native',
    'react',
    'react-hooks',
    'sort-destructure-keys',
  ],
  extends: [
    /*
        3-in-1
        – Extends prettier-config
          (just disables rules which prettier handles itself)
        – Adds prettier-plugin
          (custom handlers for rules disabled above)
        – Enables cumulative `prettier/prettier` rule
          (outputs own errors for handled syntax instead of eslint's ones
          in case auto-formatting with prettier is not used in the project)
    */
    'plugin:prettier/recommended',

    /*
        Disables related rules from the `babel` plugin
        in favor of custom handling
    */
    'prettier/babel',

    /*
        Disables related rules from the `react` plugin
        in favor of custom handling
    */
    'prettier/react',
  ],
  rules: require('./rules'),

  overrides: [
    {
      /*
          Enables 4 related rules, disables 2 conflicting
          from `core` and `react` rulesets.
          https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx/src/configs/recommended.ts
      */
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
    },
  ],
};
