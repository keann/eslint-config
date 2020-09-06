module.exports = {
  /*

      === STATIC ANALYSIS ===

  */

  /*
      Ensure imports point to files/modules that can be resolved
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md

      [Note]
      Relies on `settings['import/resolver']` stack (so most likely also on webpack's config).
  */
  'import/no-unresolved': [
    'error',
    {
      caseSensitive: true,
      commonjs: true,
      ignore: ['^(b|e|m):'],
    },
  ],

  /*
      Ensure named imports coupled with named exports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
  */
  'import/named': 'error',

  /*
      Ensure default import coupled with default export
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
  */
  'import/default': 'off',

  /*
      Ensure imported namespaces contain dereferenced properties as they are dereferenced
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
  */
  'import/namespace': 'off',

  /*
      Restrict which files can be imported in a given folder
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
  */
  'import/no-restricted-paths': 'off',

  /*
      Disallow import of modules using absolute paths
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
  */
  'import/no-absolute-path': 'error',

  /*
      Disallow `require()` calls with expressions
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/amic-require.md
  */
  'import/no-dynamic-require': 'error',

  /*
      Disallow importing the submodules of other modules
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
  */
  'import/no-internal-modules': 'off',

  /*
      Disallow webpack loader syntax in imports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
  */
  'import/no-webpack-loader-syntax': 'error',

  /*
      Disallow importing a module from itself
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
  */
  'import/no-self-import': 'error',

  /*
      Disallow cyclical dependencies between modules
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md

      [TODO]
      Keep an eye on
  */
  'import/no-cycle': 'warn',

  /*
      Ensure there are no useless path segments
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
  */
  'import/no-useless-path-segments': [
    'error',
    { commonjs: true, noUselessIndex: true },
  ],

  /*
      Disallow importing modules from parent directories
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
  */
  'import/no-relative-parent-imports': 'off',

  /*

      === HELPFUL WARNINGS ===

  */

  /*
      Disallow any invalid exports, e.g. multiple defaults
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
  */
  'import/export': 'error',

  /*
      Disallow a default import name to match a named export
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
  */
  'import/no-named-as-default': 'error',

  /*
      Disallow accessing default export property names that are also named exports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
  */
  'import/no-named-as-default-member': 'error',

  /*
      Disallow imported names marked with `@deprecated` jsdoc tag
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
  */
  'import/no-deprecated': 'warn',

  /*
      Disallow the use of extraneous packages
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md

      [Note]
      Paths are treated both as absolute paths, and relative to `process.cwd()`
  */
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        'test/**',
        'tests/**',
        '**/*.tests.*',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
      ],
      optionalDependencies: false,
    },
  ],

  /*
      Disallow the use of mutable exports with `var` or `let`
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
  */
  'import/no-mutable-exports': 'error',

  /*
      Disallow modules without any exports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md

      [Note]
      Currently doesn't properly handle CJS `module.exports`, thus may produce false positives
      https://github.com/benmosher/eslint-plugin-import/issues/1469

      [TODO]
      Add `missingExports: true` option when the issue above is closed
  */
  'import/no-unused-modules': 'warn',

  /*

      === MODULE SYSTEMS ===

  */

  /*
      Report potentially ambiguous parse goal (`script` vs. `module`)
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
  */
  'import/unambiguous': 'off',

  /*
      Report commonjs `require` calls and `module.exports` or `exports.*`
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
  */
  'import/no-commonjs': 'off',

  /*
      Report AMD `require` and `define` calls
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
  */
  'import/no-amd': 'error',

  /*
      No Node.js built-in modules
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
  */
  'import/no-nodejs-modules': 'off',

  /*

      === STYLE GUIDE ===

  */

  /*
      Ensure all imports appear before other statements
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
  */
  'import/first': 'error',

  /*
      Ensure all exports appear after other statements
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
  */
  'import/exports-last': 'off',

  /*
      Disallow duplicate imports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  */
  'import/no-duplicates': 'error',

  /*
      Disallow namespace («wildcard» `*`) imports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
  */
  'import/no-namespace': 'off',

  /*
      Enforce consistent use of file extension within the import path
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md

      [Note]
      Extended in TS ruleset, keep in mind in case of changing definition signature
  */
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      json: 'never',
      jsx: 'never',
    },
  ],

  /*
      Enforce a convention in module import order
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
  */
  'import/order': [
    'warn',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
      ],
      pathGroups: [
        {
          pattern: 'react**',
          group: 'external',
          position: 'before',
        },
        {
          pattern: 'styled-components',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@bizone/**',
          group: 'external',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: {
        order: 'asc',
      },
      'newlines-between': 'always',
    },
  ],

  /*
      Enforce a newline after import statements
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
  */
  'import/newline-after-import': 'error',

  /*
      Enforce modules with a single export to use a default export
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  */
  'import/prefer-default-export': 'off',

  /*
      Disallow modules to have too many dependencies
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
  */
  'import/max-dependencies': 'off',

  /*
      Disallow unassigned imports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
  */
  'import/no-unassigned-import': 'off',

  /*
      Disallow named default exports (e.g. `import { default as foo}`)
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
  */
  'import/no-named-default': 'error',

  /*
      Disallow default exports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
  */
  'import/no-default-export': 'off',

  /*
      Disallow named exports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
  */
  'import/no-named-export': 'off',

  /*
      Disallow anonymous values as default exports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md

      [Note]
      Anonymous functions' calls and classes instances are especially inconvenient while debugging
  */
  'import/no-anonymous-default-export': [
    'error',
    {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true,
      allowLiteral: true,
      allowObject: true,
    },
  ],

  /*
      Enforce grouping named exports together in a single export declaration
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
  */
  'import/group-exports': 'off',

  /*
      Enforce a leading comment with the `webpackChunkName` for dynamic imports
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
  */
  'import/dynamic-import-chunkname': 'off',
};
