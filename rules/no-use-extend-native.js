module.exports = {
  /*
      Disallow the use of extended native objects
      https://github.com/dustinspecker/eslint-plugin-no-use-extend-native#usage

      [Note]
      While eslint's core `no-extend-native` rule verifies code is not modifying a native prototype, `no-use-extend-native` forbids attempts to USE a modified prototype
  */
  'no-use-extend-native/no-use-extend-native': 'error',
};
