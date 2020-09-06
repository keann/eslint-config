# @keann/eslint-config

Originally based on [airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Fully integrated with [prettier](https://prettier.io/).

[Leverages](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack#eslint-import-resolver-webpack) project's webpack config (if one's found) in resolving imports.

In addition to [the core rules](https://eslint.org/docs/rules/) includes:

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import#rules)
- [eslint-plugin-sort-destructure-keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys#eslint-plugin-sort-destructure-keys)
- [no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native#usage-with-no-extend-native)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
- [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules)
- [eslint-plugin-progress](https://github.com/zero-t4/eslint-plugin-progress)

Typescript–friendly via:

- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) integration
- separate entry point for the extended ruleset

## Install

Install this package, `prettier` and `eslint` itself. Don't forget to [configure your IDE](https://eslint.org/docs/user-guide/integrations)

```bash
npm i eslint prettier @keann/eslint-config --save-dev
```

Configuration of `prettier` is totally up to you. Usually it's run in the IDE by [a plugin or extension](https://prettier.io/docs/en/editors.html). However even if you don't do that, errors will be properly shown instead of auto-formatting.

#### Linting Typescript

Small chances you wouldn't have the `typescript` package installed in such case, but still a reminder: you'll do also need it, installed preferably locally

```bash
npm i typescript eslint prettier @keann/eslint-config --save-dev
```

## Usage

Choose the respective entry point to inherit from

```javascript
/* .eslintrc.js */

// main ruleset for the JS-only codebase
module.exports = {
  extends: ['@keann'],
};

// or main ruleset + corresponding overrides for the TS (JS+TS) codebase
module.exports = {
  extends: ['@keann/typescript'],
};
```

#### Enable progress stats

Wish to have a progress bar while checking a large amount of files at once, but `eslint` has no such builtin option? Thankfully there's a [custom plugin](https://www.npmjs.com/package/eslint-plugin-progress) for that, just extend one more entry point.

```javascript
module.exports = {
  extends: ['@keann', '@keann/progress'],
};
```
