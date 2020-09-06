module.exports = {
  /*
      Enforce line breaks after opening and before closing array brackets
      https://eslint.org/docs/rules/array-bracket-newline

      [Disable reason]
      Handled by prettier
  */
  'array-bracket-newline': 'off',

  /*
      Enforce consistent spacing inside array brackets
      https://eslint.org/docs/rules/array-bracket-spacing

      [Disable reason]
      Handled by prettier
  */
  'array-bracket-spacing': 'off',

  /*
      Enforce line breaks between array elements
      https://eslint.org/docs/rules/array-element-newline

      [Disable reason]
      Handled by prettier
  */
  'array-element-newline': 'off',

  /*
      Enforce spacing inside single-line blocks
      https://eslint.org/docs/rules/block-spacing

      [Disable reason]
      Handled by prettier
  */
  'block-spacing': 'off',

  /*
      Enforce consistent brace style for blocks
      https://eslint.org/docs/rules/brace-style

      [Disable reason]
      Handled by prettier
  */
  'brace-style': 'off',

  /*
      Enforce camelcase naming convention
      https://eslint.org/docs/rules/camelcase

      [Disable reason]
      Handled by `babel/camelcase`
  */
  camelcase: 'off',

  /*
      Enforce or disallow capitalization of the first letter of a comment
      https://eslint.org/docs/rules/capitalized-comments
  */
  'capitalized-comments': 'off',

  /*
      Enforce or disallow trailing commas in multiline object literals
      https://eslint.org/docs/rules/comma-dangle

      [Disable reason]
      Handled by prettier
  */
  'comma-dangle': 'off',

  /*
      Enforce consistent spacing before and after comma
      https://eslint.org/docs/rules/comma-spacing

      [Disable reason]
      Handled by prettier
  */
  'comma-spacing': 'off',

  /*
      Enforce consistent comma style
      https://eslint.org/docs/rules/comma-style

      [Disable reason]
      Handled by prettier
  */
  'comma-style': 'off',

  /*
      Enforce consistent spacing inside computed property brackets
      https://eslint.org/docs/rules/computed-property-spacing

      [Disable reason]
      Handled by prettier
  */
  'computed-property-spacing': 'off',

  /*
      Enforce consistent naming when capturing the current execution context
      https://eslint.org/docs/rules/consistent-this
  */
  'consistent-this': 'off',

  /*
      Enforce newline at the end of file
      https://eslint.org/docs/rules/eol-last

      [Disable reason]
      Handled by prettier
  */
  'eol-last': 'off',

  /*
      Enforce spacing between function identifiers and their invocations
      https://eslint.org/docs/rules/func-call-spacing

      [Disable reason]
      Handled by prettier
  */
  'func-call-spacing': 'off',

  /*
      Enforce function names to match the name of the variable or property to which they are assigned
      https://eslint.org/docs/rules/func-name-matching
  */
  'func-name-matching': 'off',

  /*
      Enforce function expressions to have a name
      https://eslint.org/docs/rules/func-names
  */
  'func-names': ['error', 'as-needed'],

  /*
      Enforces use of function declarations or expressions
      https://eslint.org/docs/rules/func-style
  */
  'func-style': 'off',

  /*
      Enforce line breaks between arguments of a function call
      https://eslint.org/docs/rules/function-call-argument-newline

      [Disable reason]
      Handled by prettier
  */
  'function-call-argument-newline': 'off',

  /*
      Enforce consistent line breaks inside function parentheses
      https://eslint.org/docs/rules/function-paren-newline

      [Disable reason]
      Handled by prettier
  */
  'function-paren-newline': 'off',

  /*
      Disallow specified identifiers
      https://eslint.org/docs/rules/id-denylist
  */
  'id-denylist': 'off',

  /*
      Enforce minimum and maximum identifier lengths
      https://eslint.org/docs/rules/id-length
  */
  'id-length': 'off',

  /*
      Enforce identifiers to match a specified regular expression
      https://eslint.org/docs/rules/id-match
  */
  'id-match': 'off',

  /*
      Enforce the location of arrow function bodies with implicit returns
      https://eslint.org/docs/rules/implicit-arrow-linebreak

      [Disable reason]
      Handled by prettier
  */
  'implicit-arrow-linebreak': 'off',

  /*
      Enforce consistent indentation
      https://eslint.org/docs/rules/indent

      [Disable reason]
      Handled by prettier
  */
  indent: 'off',

  /*
      Enforce the consistent use of either double or single quotes in JSX attributes
      https://eslint.org/docs/rules/jsx-quotes

      [Disable reason]
      Handled by prettier
  */
  'jsx-quotes': 'off',

  /*
      Enforces consistent spacing between keys and values in object literal properties
      https://eslint.org/docs/rules/key-spacing

      [Disable reason]
      Handled by prettier
  */
  'key-spacing': 'off',

  /*
      Enforce consistent spacing before and after keywords
      https://eslint.org/docs/rules/keyword-spacing

      [Disable reason]
      Handled by prettier
  */
  'keyword-spacing': 'off',

  /*
      Enforce position of line comments
      https://eslint.org/docs/rules/line-comment-position
  */
  'line-comment-position': 'off',

  /*
      Disallow mixed `lf` and `crlf` as line breaks
      https://eslint.org/docs/rules/linebreak-style

      [Disable reason]
      Handled by prettier
  */
  'linebreak-style': 'off',

  /*
      Enforce empty lines around comments
      https://eslint.org/docs/rules/lines-around-comment

      [Disable reason]
      Handled by prettier
  */
  'lines-around-comment': 'off',

  /*
      Enforce an empty line between class members
      https://eslint.org/docs/rules/lines-between-class-members
  */
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: true },
  ],

  /*
      Enforce a maximum depth that blocks can be nested
      https://eslint.org/docs/rules/max-depth
  */
  'max-depth': 'off',

  /*
      Enforce a maximum line length
      https://eslint.org/docs/rules/max-len

      [Disable reason]
      Handled by prettier
  */
  'max-len': 'off',

  /*
      Enforce a maximum number of lines per file
      https://eslint.org/docs/rules/max-lines
  */
  'max-lines': 'off',

  /*
      Enforce a maximum function length
      https://eslint.org/docs/rules/max-lines-per-function
  */
  'max-lines-per-function': 'off',

  /*
      Enforce a maximum depth that callbacks can be nested
      https://eslint.org/docs/rules/max-nested-callbacks
  */
  'max-nested-callbacks': 'off',

  /*
      Enforce a maximum number of parameters in function definitions
      https://eslint.org/docs/rules/max-params
  */
  'max-params': 'off',

  /*
      Enforce a maximum number of statements allowed in function blocks
      https://eslint.org/docs/rules/max-statements
  */
  'max-statements': 'off',

  /*
      Enforce a maximum number of statements allowed per line
      https://eslint.org/docs/rules/max-statements-per-line
  */
  'max-statements-per-line': 'off',

  /*
      Enforce a particular style for multiline comments
      https://eslint.org/docs/rules/multiline-comment-style
  */
  'multiline-comment-style': 'off',

  /*
      Enforce newlines between operands of ternary expressions
      https://eslint.org/docs/rules/multiline-ternary

      [Disable reason]
      Handled by prettier
  */
  'multiline-ternary': 'off',

  /*
      Enforce constructor names to begin with a capital letter
      https://eslint.org/docs/rules/new-cap
  */
  'new-cap': 'error',

  /*
      Disallow the omission of parentheses when invoking a constructor with no arguments
      https://eslint.org/docs/rules/new-parens

      [Disable reason]
      Handled by prettier
  */
  'new-parens': 'off',

  /*
      Enforce new line after each  call in a method chain
      https://eslint.org/docs/rules/newline-per-chained-call

      [Disable reason]
      Handled by prettier
  */
  'newline-per-chained-call': 'off',

  /*
      Disallow use of the `Array` constructor
      https://eslint.org/docs/rules/no-array-constructor
  */
  'no-array-constructor': 'error',

  /*
      Disallow use of bitwise operators
      https://eslint.org/docs/rules/no-bitwise
  */
  'no-bitwise': 'error',

  /*
      Disallow use of the `continue` statement
      https://eslint.org/docs/rules/no-continue
  */
  'no-continue': 'error',

  /*
      Disallow comments inline after code
      https://eslint.org/docs/rules/no-inline-comments
  */
  'no-inline-comments': 'off',

  /*
      Disallow `if` as the only statement in an `else` block
      https://eslint.org/docs/rules/no-lonely-if
  */
  'no-lonely-if': 'error',

  /*
      Disallow mixes of different operators (w/o using enclosing parentheses)
      https://eslint.org/docs/rules/no-mixed-operators

      [Disable reason]
      Handled by prettier
  */
  'no-mixed-operators': 'off',

  /*
      Disallow mixed spaces and tabs for indentation
      https://eslint.org/docs/rules/no-mixed-spaces-and-tabs

      [Disable reason]
      Handled by prettier
  */
  'no-mixed-spaces-and-tabs': 'off',

  /*
      Disallow use of chained assignment expressions
      https://eslint.org/docs/rules/no-multi-assign
  */
  'no-multi-assign': 'error',

  /*
      Disallow multiple empty lines
      https://eslint.org/docs/rules/no-multiple-empty-lines

      [Disable reason]
      Handled by prettier
  */
  'no-multiple-empty-lines': 'off',

  /*
      Disallow negated conditions
      https://eslint.org/docs/rules/no-negated-condition
  */
  'no-negated-condition': 'off',

  /*
      Disallow nested ternary expressions
      https://eslint.org/docs/rules/no-nested-ternary

      [TODO]
      Disable after clarifying in code convention
  */
  'no-nested-ternary': 'warn',

  /*
      Disallow use of the `Object` constructor
      https://eslint.org/docs/rules/no-new-object
  */
  'no-new-object': 'error',

  /*
      Disallow use of unary operators, `++` and `--`
      https://eslint.org/docs/rules/no-plusplus
  */
  'no-plusplus': 'off',

  /*
      Disallow certain syntax forms
      https://eslint.org/docs/rules/no-restricted-syntax
  */
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        '`for..in` loops iterate over the entire prototype chain, which is virtually never what you want. Use `Object.{keys,values,entries}`, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  /*
      Disallow tab characters entirely
      https://eslint.org/docs/rules/no-tabs

      [Disable reason]
      Handled by prettier
  */
  'no-tabs': 'off',

  /*
      Disallow the use of ternary operators
      https://eslint.org/docs/rules/no-ternary
  */
  'no-ternary': 'off',

  /*
      Disallow trailing whitespace at the end of lines
      https://eslint.org/docs/rules/no-trailing-spaces

      [Disable reason]
      Handled by prettier
  */
  'no-trailing-spaces': 'off',

  /*
      Disallow dangling underscores in identifiers
      https://eslint.org/docs/rules/no-underscore-dangle

      [TODO]
      Drop `__base` exception after getting rid of `bem-react-core` v1
  */
  'no-underscore-dangle': [
    'error',
    {
      allow: ['__base', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  /*
      Disallow ternary operators when simpler alternatives exist (e.g. prefer `a || b` over `a ? a : b`)
      https://eslint.org/docs/rules/no-unneeded-ternary
  */
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  /*
      Disallow whitespace before properties
      https://eslint.org/docs/rules/no-whitespace-before-property

      [Disable reason]
      Handled by prettier
  */
  'no-whitespace-before-property': 'off',

  /*
      Enforce the location of single-line statements
      https://eslint.org/docs/rules/nonblock-statement-body-position

      [Disable reason]
      Handled by prettier
  */
  'nonblock-statement-body-position': 'off',

  /*
      Enforce consistent line breaks inside braces
      https://eslint.org/docs/rules/object-curly-newline

      [Disable reason]
      Handled by prettier
  */
  'object-curly-newline': 'off',

  /*
      Enforce consistent spacing inside braces
      https://eslint.org/docs/rules/object-curly-spacing

      [Disable reason]
      Handled by prettier
  */
  'object-curly-spacing': 'off',

  /*
      Enforce placing object properties on separate lines
      https://eslint.org/docs/rules/object-property-newline

      [Disable reason]
      Handled by prettier
  */
  'object-property-newline': 'off',

  /*
      Enforce variables to be declared separately
      https://eslint.org/docs/rules/one-var
  */
  'one-var': ['error', 'never'],

  /*
      Enforce consistent presence of newlines around variable declarations
      https://eslint.org/docs/rules/one-var-declaration-per-line

      [Disable reason]
      Handled by prettier
  */
  'one-var-declaration-per-line': 'off',

  /*
      Enforce assignment operator shorthand where possible
      https://eslint.org/docs/rules/operator-assignment
  */
  'operator-assignment': ['error', 'always'],

  /*
      Enforce consistent line breaks style for operators
      https://eslint.org/docs/rules/operator-linebreak

      [Disable reason]
      Handled by prettier
  */
  'operator-linebreak': 'off',

  /*
      Disallow padding within blocks
      https://eslint.org/docs/rules/padded-blocks

      [Disable reason]
      Handled by prettier
  */
  'padded-blocks': 'off',

  /*
      Disallow padding lines between statements
      https://eslint.org/docs/rules/padding-line-between-statements
  */
  'padding-line-between-statements': 'off',

  /*
      Disallow the use of `Math.pow` in favor of the `**` operator
      https://eslint.org/docs/rules/prefer-exponentiation-operator
  */
  'prefer-exponentiation-operator': 'error',

  /*
      Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
      https://eslint.org/docs/rules/prefer-object-spread
  */
  'prefer-object-spread': 'error',

  /*
      Enforce the use of quotes around object literal property names
      https://eslint.org/docs/rules/quote-props

      [Disable reason]
      Handled by prettier
  */
  'quote-props': 'off',

  /*
      Enforce the consistent use of either backticks, double, or single quotes
      https://eslint.org/docs/rules/quotes

      [Disable reason]
      Handled by prettier
  */
  quotes: 'off',

  /*
      Enforce use of semicolons instead of ASI
      https://eslint.org/docs/rules/semi

      [Disable reason]
      Handled by prettier
  */
  semi: 'off',

  /*
      Enforce spacing before and after semicolons
      https://eslint.org/docs/rules/semi-spacing

      [Disable reason]
      Handled by prettier
  */
  'semi-spacing': 'off',

  /*
      Enforce location of semicolons
      https://eslint.org/docs/rules/semi-style

      [Disable reason]
      Handled by prettier
  */
  'semi-style': 'off',

  /*
      Enforce object keys sorting
      https://eslint.org/docs/rules/sort-keys
  */
  'sort-keys': 'off',

  /*
      Enforce variables sorting within the same declaration block
      https://eslint.org/docs/rules/sort-vars
  */
  'sort-vars': 'off',

  /*
      Enforce consistent spacing before blocks
      https://eslint.org/docs/rules/space-before-blocks

      [Disable reason]
      Handled by prettier
  */
  'space-before-blocks': 'off',

  /*
      Enforce consistent spacing before `function` definition opening parenthesis
      https://eslint.org/docs/rules/space-before-function-paren

      [Disable reason]
      Handled by prettier
  */
  'space-before-function-paren': 'off',

  /*
      Enforce consistent spacing inside parentheses
      https://eslint.org/docs/rules/space-in-parens

      [Disable reason]
      Handled by prettier
  */
  'space-in-parens': 'off',

  /*
      Require spaces around infix operators
      https://eslint.org/docs/rules/space-infix-ops

      [Disable reason]
      Handled by prettier
  */
  'space-infix-ops': 'off',

  /*
      Enforce consistent spacing before or after unary operators
      https://eslint.org/docs/rules/space-unary-ops

      [Disable reason]
      Handled by prettier
  */
  'space-unary-ops': 'off',

  /*
      Enforce consistent spacing after the `//` or `/*` in a comment
      https://eslint.org/docs/rules/spaced-comment
  */
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['/'] /* for triple slash TS comments */,
      },
      block: {
        exceptions: ['-', '+'],
        markers: [':', '::'] /* for Flow comment types */,
        balanced: true,
      },
    },
  ],

  /*
      Enforce spacing around colons of `switch` statements
      https://eslint.org/docs/rules/switch-colon-spacing

      [Disable reason]
      Handled by prettier
  */
  'switch-colon-spacing': 'off',

  /*
      Enforce spacing between template tags and their literals
      https://eslint.org/docs/rules/template-tag-spacing

      [Disable reason]
      Handled by prettier
  */
  'template-tag-spacing': 'off',

  /*
      Disallow the Unicode Byte Order Mark
      https://eslint.org/docs/rules/unicode-bom

      [Disable reason]
      Handled by prettier
  */
  'unicode-bom': 'off',

  /*
      Enforce parenthesis around regex literals
      https://eslint.org/docs/rules/wrap-regex

      [Disable reason]
      Handled by prettier
  */
  'wrap-regex': 'off',
};
