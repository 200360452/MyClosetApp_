module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-env', //  if using ECMAScript features
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs', // helps Babel handle ECMAScript modules
  ],
};