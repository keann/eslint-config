module.exports = {
  /*
      Enforce no braces where they can be omitted
      https://eslint.org/docs/rules/arrow-body-style

      [Disable reason]
      Handled by prettier
  */
  'arrow-body-style': 'off',

  /*
      Require parentheses around arrow function arguments
      https://eslint.org/docs/rules/arrow-parens

      [Disable reason]
      Handled by prettier
  */
  'arrow-parens': 'off',

  /*
      Enforce consistent spacing before and after the arrow in arrow functions
      https://eslint.org/docs/rules/arrow-spacing

      [Disable reason]
      Handled by prettier
  */
  'arrow-spacing': 'off',

  /*
      Require `super()` calls in constructors
      https://eslint.org/docs/rules/constructor-super
  */
  'constructor-super': 'error',

  /*
      Enforce the spacing around the asterisk (*) in generator functions
      https://eslint.org/docs/rules/generator-star-spacing

      [Disable reason]
      Handled by prettier
  */
  'generator-star-spacing': 'off',

  /*
      Disallow modifying variables of class declarations
      https://eslint.org/docs/rules/no-class-assign
  */
  'no-class-assign': 'error',

  /*
      Disallow arrow functions where they could be confused with comparisons
      https://eslint.org/docs/rules/no-confusing-arrow

      [Disable reason]
      Handled by prettier
  */
  'no-confusing-arrow': 'off',

  /*
      Disallow reassigning `const` variables
      https://eslint.org/docs/rules/no-const-assign
  */
  'no-const-assign': 'error',

  /*
      Disallow duplicate class members
      https://eslint.org/docs/rules/no-dupe-class-members
  */
  'no-dupe-class-members': 'error',

  /*
      Disallow importing from the same path more than once
      https://eslint.org/docs/rules/no-duplicate-imports

      [Disable reason]
      Handled by `import/no-duplicates`
  */
  'no-duplicate-imports': 'off',

  /*
      Disallow `new` operators with the `Symbol` object
      https://eslint.org/docs/rules/no-new-symbol
  */
  'no-new-symbol': 'error',

  /*
      Disallow specified names in exports
      https://eslint.org/docs/rules/no-restricted-exports
  */
  'no-restricted-exports': 'off',

  /*
      Disallow specified modules when loaded by `import`
      https://eslint.org/docs/rules/no-restricted-imports
  */
  'no-restricted-imports': 'off',

  /*
      Disallow to use `this/super` before `super()` calling in constructors
      https://eslint.org/docs/rules/no-this-before-super
  */
  'no-this-before-super': 'error',

  /*
      Disallow unnecessary computed property keys in objects and classes
      https://eslint.org/docs/rules/no-useless-computed-key
  */
  'no-useless-computed-key': 'error',

  /*
      Disallow unnecessary constructor
      https://eslint.org/docs/rules/no-useless-constructor
  */
  'no-useless-constructor': 'error',

  /*
      Disallow renaming import, export, and destructured assignments to the same name
      https://eslint.org/docs/rules/no-useless-rename
  */
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  /*
      Require `let` or `const` instead of `var`
      https://eslint.org/docs/rules/no-var
  */
  'no-var': 'error',

  /*
      Require method and property shorthand syntax for object literals
      https://eslint.org/docs/rules/object-shorthand
  */
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  /*
      Require using arrow functions as callbacks
      https://eslint.org/docs/rules/prefer-arrow-callback

      [Disable reason]
      Handled by prettier
  */
  'prefer-arrow-callback': 'off',

  /*
      Require `const` declarations for variables that are never reassigned after declared
      https://eslint.org/docs/rules/prefer-const
  */
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  /*
      Prefer destructuring from arrays and objects
      https://eslint.org/docs/rules/prefer-destructuring
  */
  'prefer-destructuring': [
    'warn',
    {
      AssignmentExpression: {
        array: false,
        object: true,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  /*
      Disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
      https://eslint.org/docs/rules/prefer-numeric-literals
  */
  'prefer-numeric-literals': 'error',

  /*
      Require usage of rest parameters instead of `arguments`
      https://eslint.org/docs/rules/prefer-rest-params
  */
  'prefer-rest-params': 'error',

  /*
      Require usage of spread operators instead of `.apply()`
      https://eslint.org/docs/rules/prefer-spread
  */
  'prefer-spread': 'error',

  /*
      Require usage of template literals instead of string concatenation
      https://eslint.org/docs/rules/prefer-template
  */
  'prefer-template': 'error',

  /*
      Disallow generator functions that do not have `yield`
      https://eslint.org/docs/rules/require-yield
  */
  'require-yield': 'error',

  /*
      Enforce spacing between rest and spread operators and their expressions
      https://eslint.org/docs/rules/rest-spread-spacing

      [Disable reason]
      Handled by prettier
  */
  'rest-spread-spacing': 'off',

  /*
      Enforce sorted import declarations
      https://eslint.org/docs/rules/sort-imports
  */
  'sort-imports': 'off',

  /*
      Require a `Symbol` description
      https://eslint.org/docs/rules/symbol-description
  */
  'symbol-description': 'error',

  /*
      Enforce usage of spacing in template strings
      https://eslint.org/docs/rules/template-curly-spacing

      [Disable reason]
      Handled by prettier
  */
  'template-curly-spacing': 'off',

  /*
      Enforce spacing around the asterisk (*) in `yield*` expressions
      https://eslint.org/docs/rules/yield-star-spacing

      [Disable reason]
      Handled by prettier
  */
  'yield-star-spacing': 'off',
};
