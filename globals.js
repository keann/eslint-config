module.exports = {
  /*
      In case of providing runtime constants via webpack.DefinePlugin
      enforces encapsulating them into one object

      webpack: {
        CONST_1: ...,
        CONST_2: ...,
      }
  */
  webpack: 'readonly',
};
