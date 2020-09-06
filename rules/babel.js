/*
    Rules, re-implemented to support experimental syntax provided by Babel.
    Each corresponds to a core eslint rule, and has the same options.
    https://github.com/babel/eslint-plugin-babel#rules
*/

module.exports = {
  /*
      Enforce camelcase naming convention
      https://eslint.org/docs/rules/camelcase

      [Fixes]
      Doesn't complain about optional chaining `let foo = bar?.a_b`

      [TODO]
      Consider adding back `allow: ['^UNSAFE_']` option when PR is merged
      https://github.com/babel/eslint-plugin-babel/pull/187
  */
  'babel/camelcase': [
    'error',
    {
      ignoreDestructuring: false,
      properties: 'never',
    },
  ],

  /*
      Disallow `this` keyword outside of classes or class-like objects
      https://eslint.org/docs/rules/no-invalid-this

      [Fixes]
      Doesn't fail when inside class properties `class A { a = this.b }`
  */
  'babel/no-invalid-this': 'error',

  /*
      Disallow unused expressions
      https://eslint.org/docs/rules/no-unused-expressions

      [Fixes]
      Doesn't fail when using `do` expressions or optional chaining `a?.b()`
  */
  'babel/no-unused-expressions': 'error',
};
