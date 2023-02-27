const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
   globalObject: 'this',
   library: {
     name: 'remoteMiddlwares',
     type: 'umd',
   },
  },
};