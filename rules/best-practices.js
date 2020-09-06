module.exports = {
  /*
      Enforces getter/setter pairs in objects and classes
      https://eslint.org/docs/rules/accessor-pairs
  */
  'accessor-pairs': 'off',

  /*
      Enforces `return` statements in callbacks of array's methods
      https://eslint.org/docs/rules/array-callback-return
  */
  'array-callback-return': ['error', { allowImplicit: true }],

  /*
      Enforce the use of variables within the scope they are defined
      https://eslint.org/docs/rules/block-scoped-var
  */
  'block-scoped-var': 'error',

  /*
      Enforce that class methods utilize `this`
      https://eslint.org/docs/rules/class-methods-use-this
  */
  'class-methods-use-this': [
    'warn',
    {
      exceptMethods: [
        'componentDidMount',
        'shouldComponentUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentDidCatch',
        'render',
        'componentWillUnmount',
      ],
    },
  ],

  /*
      Specify the maximum cyclomatic complexity allowed in a program
      https://eslint.org/docs/rules/complexity
  */
  complexity: 'off',

  /*
      Require `return` statements to either always or never specify values
      https://eslint.org/docs/rules/consistent-return
  */
  'consistent-return': 'off',

  /*
      Enforce consistent brace style for all control statements
      https://eslint.org/docs/rules/curly

      [Disable reason]
      Handled by prettier
  */
  curly: 'off',

  /*
      Require `default` case in `switch` statements
      https://eslint.org/docs/rules/default-case
  */
  'default-case': ['error', { commentPattern: '^no default$' }],

  /*
      Enforce default parameters to be last
      https://eslint.org/docs/rules/default-param-last

      [Disable reason]
      Incompatible with Redux pattern `function reducer(state = initialState, action)`
  */
  'default-param-last': 'off',

  /*
      Enforce consistent newlines before or after dots
      https://eslint.org/docs/rules/dot-location

      [Disable reason]
      Handled by prettier
  */
  'dot-location': 'off',

  /*
      Enforce dot notation whenever possible
      https://eslint.org/docs/rules/dot-notation
  */
  'dot-notation': ['error', { allowKeywords: true }],

  /*
      Require the use of `===` and `!==`
      https://eslint.org/docs/rules/eqeqeq
  */
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  /*
      Require grouped accessor pairs in object literals and classes
      https://eslint.org/docs/rules/grouped-accessor-pairs
  */
  'grouped-accessor-pairs': 'error',

  /*
      Make sure `for-in` loops have an `if` statement
      https://eslint.org/docs/rules/guard-for-in
  */
  'guard-for-in': 'error',

  /*
      Enforce a maximum number of classes per file
      https://eslint.org/docs/rules/max-classes-per-file
  */
  'max-classes-per-file': 'off',

  /*
      Disallow the use of `alert`, `confirm`, and `prompt`
      https://eslint.org/docs/rules/no-alert
  */
  'no-alert': 'warn',

  /*
      Disallow use of `arguments.caller` or `arguments.callee`
      https://eslint.org/docs/rules/no-caller
  */
  'no-caller': 'error',

  /*
      Disallow lexical declarations in case/default clauses
      https://eslint.org/docs/rules/no-case-declarations
  */
  'no-case-declarations': 'error',

  /*
      Disallow returning value in constructor
      https://eslint.org/docs/rules/no-constructor-return
  */
  'no-constructor-return': 'error',

  /*
      Disallow division operators explicitly at beginning of regular expression
      https://eslint.org/docs/rules/no-div-regex
  */
  'no-div-regex': 'off',

  /*
      Disallow `else` after a `return` in an `if`
      https://eslint.org/docs/rules/no-else-return
  */
  'no-else-return': ['error', { allowElseIf: false }],

  /*
      Disallow empty functions, except for standalone funcs/arrows
      https://eslint.org/docs/rules/no-empty-function
  */
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  /*
      Disallow empty destructuring patterns
      https://eslint.org/docs/rules/no-empty-pattern
  */
  'no-empty-pattern': 'error',

  /*
      Disallow comparisons to `null` without a type-checking operator
      https://eslint.org/docs/rules/no-eq-null
  */
  'no-eq-null': 'off',

  /*
      Disallow use of `eval()`
      https://eslint.org/docs/rules/no-eval
  */
  'no-eval': 'error',

  /*
      Disallow adding to native types
      https://eslint.org/docs/rules/no-extend-native
  */
  'no-extend-native': 'error',

  /*
      Disallow unnecessary function binding
      https://eslint.org/docs/rules/no-extra-bind
  */
  'no-extra-bind': 'error',

  /*
      Disallow unnecessary labels
      https://eslint.org/docs/rules/no-extra-label
  */
  'no-extra-label': 'error',

  /*
      Disallow fallthrough of `case` statements
      https://eslint.org/docs/rules/no-fallthrough
  */
  'no-fallthrough': 'error',

  /*
      Disallow the use of leading or trailing decimal points in numeric literals
      https://eslint.org/docs/rules/no-floating-decimal

      [Disable reason]
      Handled by prettier
  */
  'no-floating-decimal': 'off',

  /*
      Disallow reassignments of native objects or read-only globals
      https://eslint.org/docs/rules/no-global-assign
  */
  'no-global-assign': 'error',

  /*
      Disallow implicit type conversions
      https://eslint.org/docs/rules/no-implicit-coercion
  */
  'no-implicit-coercion': [
    'error',
    { boolean: false, number: true, string: true },
  ],

  /*
      Disallow declarations in the global scope
      https://eslint.org/docs/rules/no-implicit-globals
  */
  'no-implicit-globals': 'off',

  /*
      Disallow use of `eval()`-like methods
      https://eslint.org/docs/rules/no-implied-eval
  */
  'no-implied-eval': 'error',

  /*
      Disallow `this` keyword outside of classes or class-like objects
      https://eslint.org/docs/rules/no-invalid-this

      [Disable reason]
      Handled by `babel/no-invalid-this`
  */
  'no-invalid-this': 'off',

  /*
      Disallow usage of `__iterator__` property
      https://eslint.org/docs/rules/no-iterator
  */
  'no-iterator': 'error',

  /*
      Disallow labeled statements
      https://eslint.org/docs/rules/no-labels
  */
  'no-labels': 'error',

  /*
      Disallow unnecessary nested blocks
      https://eslint.org/docs/rules/no-lone-blocks
  */
  'no-lone-blocks': 'error',

  /*
      Disallow creation of functions within loops
      https://eslint.org/docs/rules/no-loop-func
  */
  'no-loop-func': 'error',

  /*
      Disallow magic numbers
      https://eslint.org/docs/rules/no-magic-numbers
  */
  'no-magic-numbers': 'off',

  /*
      Disallow use of multiple spaces
      https://eslint.org/docs/rules/no-multi-spaces

      [Disable reason]
      Handled by prettier
  */
  'no-multi-spaces': 'off',

  /*
      Disallow use of multiline strings
      https://eslint.org/docs/rules/no-multi-str
  */
  'no-multi-str': 'error',

  /*
      Disallow `new` operators outside of assignments or comparisons
      https://eslint.org/docs/rules/no-new
  */
  'no-new': 'error',

  /*
      Disallow use of `new` operator for the `Function` object
      https://eslint.org/docs/rules/no-new-func
  */
  'no-new-func': 'error',

  /*
      Disallow creating new instances of `String`, `Number`, and `Boolean`
      https://eslint.org/docs/rules/no-new-wrappers
  */
  'no-new-wrappers': 'error',

  /*
      Disallow use of (old style) octal literals
      https://eslint.org/docs/rules/no-octal
  */
  'no-octal': 'error',

  /*
      Disallow use of octal escape sequences in string literals
      https://eslint.org/docs/rules/no-octal-escape
  */
  'no-octal-escape': 'error',

  /*
      Disallow reassignment of function parameters
      https://eslint.org/docs/rules/no-param-reassign
  */
  'no-param-reassign': 'error',

  /*
      Disallow usage of `__proto__` property
      https://eslint.org/docs/rules/no-proto
  */
  'no-proto': 'error',

  /*
      Disallow declaring the same variable more then once
      https://eslint.org/docs/rules/no-redeclare
  */
  'no-redeclare': 'error',

  /*
      Disallow certain object properties
      https://eslint.org/docs/rules/no-restricted-properties
  */
  'no-restricted-properties': [
    'error',
    ...['global', 'window', 'self'].map((object) => ({
      object,
      property: 'isFinite',
      message: 'Use Number.isFinite instead',
    })),
    ...['global', 'window', 'self'].map((object) => ({
      object,
      property: 'isNaN',
      message: 'Use Number.isNaN instead',
    })),
  ],

  /*
      Disallow assignment in `return` statement unless it's enclosed in parentheses
      https://eslint.org/docs/rules/no-return-assign
  */
  'no-return-assign': 'error',

  /*
      Disallow redundant `return await`
      https://eslint.org/docs/rules/no-return-await
  */
  'no-return-await': 'error',

  /*
      Disallow use of `javascript:` urls.
      https://eslint.org/docs/rules/no-script-url
  */
  'no-script-url': 'error',

  /*
      Disallow self assignment
      https://eslint.org/docs/rules/no-self-assign
  */
  'no-self-assign': 'error',

  /*
      Disallow comparisons where both sides are exactly the same
      https://eslint.org/docs/rules/no-self-compare
  */
  'no-self-compare': 'error',

  /*
      Disallow use of comma operator
      https://eslint.org/docs/rules/no-sequences
  */
  'no-sequences': 'error',

  /*
      Disallow throwing literals as exceptions
      https://eslint.org/docs/rules/no-throw-literal
  */
  'no-throw-literal': 'error',

  /*
      Disallow unmodified conditions of loops
      https://eslint.org/docs/rules/no-unmodified-loop-condition
  */
  'no-unmodified-loop-condition': 'error',

  /*
      Disallow usage of expressions in statement position
      https://eslint.org/docs/rules/no-unused-expressions

      [Disable reason]
      Handled by `babel/no-unused-expressions`
  */
  'no-unused-expressions': 'off',

  /*
      Disallow unused labels
      https://eslint.org/docs/rules/no-unused-labels
  */
  'no-unused-labels': 'error',

  /*
      Disallow unnecessary `.call()` and `.apply()`
      https://eslint.org/docs/rules/no-useless-call
  */
  'no-useless-call': 'off',

  /*
      Disallow unnecessary `catch` clauses
      https://eslint.org/docs/rules/no-useless-catch
  */
  'no-useless-catch': 'error',

  /*
      Disallow useless string concatenation
      https://eslint.org/docs/rules/no-useless-concat
  */
  'no-useless-concat': 'error',

  /*
      Disallow unnecessary string escaping
      https://eslint.org/docs/rules/no-useless-escape
  */
  'no-useless-escape': 'error',

  /*
      Disallow redundant `return` keywords
      https://eslint.org/docs/rules/no-useless-return
  */
  'no-useless-return': 'error',

  /*
      Disallow use of `void` operator
      https://eslint.org/docs/rules/no-void
  */
  'no-void': 'error',

  /*
      Disallow usage of configurable warning terms in comments: e.g. todo
      https://eslint.org/docs/rules/no-warning-comments
  */
  'no-warning-comments': 'off',

  /*
      Disallow use of the `with` statement
      https://eslint.org/docs/rules/no-with
  */
  'no-with': 'error',

  /*
      Enforce using named capture group in regular expression
      https://eslint.org/docs/rules/prefer-named-capture-group
  */
  'prefer-named-capture-group': 'off',

  /*
      Require using `Error` objects as `Promise` rejection reasons
      https://eslint.org/docs/rules/prefer-promise-reject-errors
  */
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  /*
      Disallow use of the `RegExp` constructor in favor of regular expression literals where possible
      https://eslint.org/docs/rules/prefer-regex-literals
  */
  'prefer-regex-literals': 'error',

  /*
      Require use of the second argument for `parseInt()`
      https://eslint.org/docs/rules/radix
  */
  radix: 'error',

  /*
      Require `await` in async function
      https://eslint.org/docs/rules/require-await
  */
  'require-await': 'off',

  /*
      Enforce the use of `u` flag on `RegExp`
      https://eslint.org/docs/rules/require-unicode-regexp
  */
  'require-unicode-regexp': 'off',

  /*
      Require `var` declarations be placed at the top of their containing scope
      https://eslint.org/docs/rules/vars-on-top
  */
  'vars-on-top': 'error',

  /*
      Require immediate function invocation to be wrapped in parentheses
      https://eslint.org/docs/rules/wrap-iife

      [Disable reason]
      Handled by prettier
  */
  'wrap-iife': 'off',

  /*
      Require or disallow Yoda conditions
      https://eslint.org/docs/rules/yoda
  */
  yoda: 'error',
};
