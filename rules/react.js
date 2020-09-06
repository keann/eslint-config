module.exports = {
  /*
      Enforce consistent naming for boolean props
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md

      [TODO]
      Enable after clarifying in code convention
  */
  'react/boolean-prop-naming': 'off',

  /*
      Disallow `button` element without an explicit `type` attribute
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  */
  'react/button-has-type': [
    'error',
    { button: true, submit: true, reset: false },
  ],

  /*
      Enforce all default props to be defined and not required in `propTypes`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  */
  'react/default-props-match-prop-types': [
    'error',
    { allowRequiredDefaults: false },
  ],

  /*
      Enforce consistent usage of destructuring assignment of props, state, and context
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  */
  'react/destructuring-assignment': 'off',

  /*
      Prevent missing `displayName` in a React component definition
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
  */
  'react/display-name': 'off',

  /*
      Disallow certain props on components
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  */
  'react/forbid-component-props': 'off',

  /*
      Disallow certain props on DOM nodes
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  */
  'react/forbid-dom-props': 'off',

  /*
      Disallow certain elements
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  */
  'react/forbid-elements': 'off',

  /*
      Disallow usage of another component's prop types unless they are explicitly exported
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md

      [Disable reason]
      Only critical for the ability to drop `propTypes` in production build
  */
  'react/forbid-foreign-prop-types': 'off',

  /*
      Disallow certain prop types (`any`, `array`, `object`)
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  */
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  /*
      Enforce a specific function type for function components
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  */
  'react/function-component-definition': 'off',

  /*
      Disallow usage of `this.state` within a `this.setState`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md

      [Disable reason]
      Produces false positives (https://github.com/yannickcr/eslint-plugin-react/issues/1931)
  */
  'react/no-access-state-in-setstate': 'off',

  /*
      Disallow adjacent inline elements not separated by whitespace
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
  */
  'react/no-adjacent-inline-elements': 'off',

  /*
      Disallow usage of array's index in key prop
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  */
  'react/no-array-index-key': 'warn',

  /*
      Disallow passing `children` as a usual prop
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  */
  'react/no-children-prop': 'error',

  /*
      Disallow usage of dangerous JSX properties
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  */
  'react/no-danger': 'warn',

  /*
      Disallow usage of both `children` and `dangerouslySetInnerHTML` props
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  */
  'react/no-danger-with-children': 'error',

  /*
      Disallow usage of deprecated methods
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  */
  'react/no-deprecated': 'error',

  /*
      Disallow usage of `setState` in `componentDidMount`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  */
  'react/no-did-mount-set-state': 'off',

  /*
      Disallow usage of `setState` in `componentDidUpdate`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  */
  'react/no-did-update-set-state': 'warn',

  /*
      Disallow direct mutation of `this.state`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  */
  'react/no-direct-mutation-state': 'error',

  /*
      Disallow usage of `findDOMNode`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

      [TODO]
      Tighten to «error» (next major)
  */
  'react/no-find-dom-node': 'warn',

  /*
      Disallow usage of `isMounted` pattern
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  */
  'react/no-is-mounted': 'error',

  /*
      Disallow multiple component definition per file
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  */
  'react/no-multi-comp': 'off',

  /*
      Disallow usage of `shouldComponentUpdate` when extending `PureComponent`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  */
  'react/no-redundant-should-component-update': 'error',

  /*
      Disallow usage of the `return` value of `render` method
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  */
  'react/no-render-return-value': 'error',

  /*
      Disallow usage of `setState`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  */
  'react/no-set-state': 'off',

  /*
      Disallow usage of string references
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  */
  'react/no-string-refs': 'error',

  /*
      Disalow usage of `this` in stateless functional components
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md

      [Disable reason]
      Produces false positives, at least on `bem-react-core` v1 declarations

      [TODO]
      Try to enable back after getting rid of `bem-react-core`
  */
  'react/no-this-in-sfc': 'off',

  /*
      Prevents common typos
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  */
  'react/no-typos': 'error',

  /*
      Disallow invalid characters appearing in markup
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  */
  'react/no-unescaped-entities': 'error',

  /*
      Disallow usage of unknown DOM property
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  */
  'react/no-unknown-property': 'error',

  /*
      Disallow usage of `UNSAFE_` methods
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
  */
  'react/no-unsafe': ['warn', { checkAliases: true }],

  /*
      Disallow definitions of unused prop types
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  */
  'react/no-unused-prop-types': ['error', { skipShapeProps: true }],

  /*
      Disallow definition of unused state fields
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
  */
  'react/no-unused-state': 'error',

  /*
      Disallow usage of `setState` in `componentWillUpdate`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  */
  'react/no-will-update-set-state': 'error',

  /*
      Enforce ES6 `class` declarations over `React.createClass`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  */
  'react/prefer-es6-class': ['error', 'always'],

  /*
      Enforce that props are read-only
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  */
  'react/prefer-read-only-props': 'off',

  /*
      Enforce stateless functions if not using lifecycle methods, `setState` or `ref`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  */
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

  /*
      Disallow usage of props which were not defined in `propTypes`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  */
  'react/prop-types': ['error', { skipUndeclared: false }],

  /*
      Enforce an explicit import of React in a module where JSX is used
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  */
  'react/react-in-jsx-scope': 'error',

  /*
      Enforce a `defaultProps` definition for every prop that is not required
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  */
  'react/require-default-props': ['error', { forbidDefaultForRequired: true }],

  /*
      Enforce usage of `shouldComponentUpdate`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  */
  'react/require-optimization': 'off',

  /*
      Enforce `render` method to return something
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  */
  'react/require-render-return': 'error',

  /*
      Disallow extra closing tags for components without children
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  */
  'react/self-closing-comp': 'error',

  /*
      Enforce component methods order
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  */
  'react/sort-comp': 'off',

  /*
      Enforce `propTypes` declarations alphabetical sorting
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  */
  'react/sort-prop-types': [
    'error',
    {
      callbacksLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      requiredFirst: false,
      sortShapeProp: true,
    },
  ],

  /*
      Enforce state initialization style
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  */
  'react/state-in-constructor': 'off',

  /*
      Enforce static properties position in a component definition
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  */
  'react/static-property-placement': 'off',

  /*
      Enforce style prop value to be an object
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  */
  'react/style-prop-object': 'error',

  /*
      Disallow receiving `children` prop by void DOM elements (e.g. `<br />`)/
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  */
  'react/void-dom-elements-no-children': 'error',

  /*

      === JSX-SPECIFIC ===

  */

  /*
      Enforce boolean attributes notation in JSX
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  */
  'react/jsx-boolean-value': ['error', 'never'],

  /*
      Enforce spaces between inline tags
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-child-element-spacing': 'off',

  /*
      Enforce consistent closing bracket location
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-closing-bracket-location': 'off',

  /*
      Enforce consistent closing tag location
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-closing-tag-location': 'off',

  /*
      Disallow unnecessary curly braces in JSX props and/or children
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  */
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' },
  ],

  /*
      Enforce consistent line breaks in curly braces in JSX attributes and expressions
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-curly-newline': 'off',

  /*
      Enforce consistent spacing inside of curly braces in JSX attributes
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-curly-spacing': 'off',

  /*
      Enforce consistent spacing around jsx equals signs
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-equals-spacing': 'off',

  /*
      Disallow files other than `.jsx` to contain JSX
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  */
  'react/jsx-filename-extension': 'off',

  /*
      Enforce a new line for the first prop in a multiline JSX element
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-first-prop-new-line': 'off',

  /*
      Enforce consistent syntax of React fragments
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  */
  'react/jsx-fragments': 'off',

  /*
      Enforce event handler naming conventions in JSX
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  */
  'react/jsx-handler-names': 'off',

  /*
      Enforce consistent JSX indentation
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-indent': 'off',

  /*
      Enforce consistent props indentation in JSX
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-indent-props': 'off',

  /*
      Enforce key prop for each item while rendering an array
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  */
  'react/jsx-key': 'warn',

  /*
      Enforce JSX maximum depth
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  */
  'react/jsx-max-depth': 'off',

  /*
      Enforce the maximum of props on a single line
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-max-props-per-line': 'off',

  /*
      Disallow usage of `.bind()` and inline functions in JSX props
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  */
  'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],

  /*
      Prevent accidental JS comments from being injected into JSX as text
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  */
  'react/jsx-no-comment-textnodes': 'error',

  /*
      Disallow duplicate props
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  */
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

  /*
      Disallow usage of unwrapped JSX strings
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  */
  'react/jsx-no-literals': 'off',

  /*
      Disallow usage of `javascript:` URLs
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  */
  'react/jsx-no-script-url': 'error',

  /*
      Disallow `target="_blank"` on links without `rel="noreferrer"`
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  */
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

  /*
      Disallow undeclared variables in JSX
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  */
  'react/jsx-no-undef': 'error',

  /*
      Disallow unnecessary fragments
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  */
  'react/jsx-no-useless-fragment': 'error',

  /*
      One JSX Element Per Line [TODO ppp]
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  */
  'react/jsx-one-expression-per-line': 'off',

  /*
      Enforce PascalCase for user-defined JSX components
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  */
  'react/jsx-pascal-case': 'error',

  /*
      Disallow multiple spaces between inline JSX props
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-props-no-multi-spaces': 'off',

  /*
      Disallow JSX props spreading
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  */
  'react/jsx-props-no-spreading': 'off',

  /*
      Enforce `defaultProps` declarations alphabetical sorting
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
  */
  'react/jsx-sort-default-props': ['error', { ignoreCase: true }],

  /*
      Enforce props alphabetical sorting
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  */
  'react/jsx-sort-props': 'off',

  /*
      Enforce whitespace in and around the JSX opening and closing brackets
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-tag-spacing': 'off',

  /*
      Enforce `React` to be marked as used variable for `no-unused-vars` rule checks
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  */
  'react/jsx-uses-react': 'error',

  /*
      Enforce variables used in JSX to be marked as used for `no-unused-vars` rule checks
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  */
  'react/jsx-uses-vars': 'error',

  /*
      Enforce parentheses around multilines JSX
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md

      [Disable reason]
      Handled by prettier
  */
  'react/jsx-wrap-multilines': 'off',
};
