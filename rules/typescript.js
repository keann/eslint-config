const baseImportRules = require('./import');

const importExtensions = baseImportRules['import/extensions'];

module.exports = {
  /*
      Ban `// @ts-<directive>` comments from being used or require descriptions after directive
      https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md

      [Disable reason]
      `ts-ignore` is sometimes useful to set in place, for example when an external library has wrong (or just bad) typings, or for temporary sakes (with TO-DO following)
  */
  '@typescript-eslint/ban-ts-comment': 'off',

  /*
      Require explicit return types on functions and class methods
      https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md

      [Note]
      It makes no sense to allow type inference for expression parameters, but require typing the response
  */
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    { allowExpressions: true, allowTypedFunctionExpressions: true },
  ],

  /*
      Require explicit accessibility modifiers on class properties and methods
      https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md

      [Disable reason]
      No need in this in 99.9% of cases unless your app is an external library
  */
  '@typescript-eslint/explicit-member-accessibility': 'off',

  /*
      Require explicit return and argument types on exported functions' and classes' public class methods
      https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
  */
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  /*
      Disallow the declaration of empty interfaces
      https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md

      [Disable reason]
      Empty interface increases code readability in case you override existing interface without any addition
  */
  '@typescript-eslint/no-empty-interface': 'off',

  /*
      Disallow usage of the `any` type
      https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md

      [Disable reason]
      Some places need 'any' or code become unreadable
  */
  '@typescript-eslint/no-explicit-any': 'off',

  /*
      Disallow the use of variables before they are defined
      https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md

      [Note]
      Functions may be safely hoisted
  */
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true, typedefs: true },
  ],

  /*

      === MAIN RULESET OVERRIDES ===

  */

  /*
      Enforce consistent use of file extension within the import path
      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md

      [Note]
      TS requires JSON extension to be set explicitly
      https://github.com/microsoft/TypeScript/issues/24357
  */
  'import/extensions': [
    importExtensions[0],
    importExtensions[1],
    {
      ...importExtensions[2],
      ts: 'never',
      tsx: 'never',
      json: 'always',
    },
  ],

  /*
      Disallow definitions of unused prop types
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md

      [Disable reason]
      Produces false positives within TS files
  */
  'react/no-unused-prop-types': 'off',

  /*
      Prevent missing props validation in a React component definition
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md

      [Disable reason]
      No need, as in TS they are defined in a [Component]Props interface
  */
  'react/prop-types': 'off',

  /*
      Enforce a `defaultProps` definition for every prop that is not required
      https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md

      [Disable reason]
      No need, TS has type checking
  */
  'react/require-default-props': 'off',
};
