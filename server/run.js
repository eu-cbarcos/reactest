require('babel-polyfill'); // lo que falte, babel o agregue
require('ignore-styles');
require('babel-register')({
  ignore: [/(node_modules)/], // no considere node_modules
  presets: ['env'],
  plugins: [
    'syntax-dynamic-import',
    'dynamic-import-node',
    'transform-react-jsx'
  ]
});
require('./graphql-server.js');