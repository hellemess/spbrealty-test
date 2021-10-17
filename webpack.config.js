const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'script.js',
    path: path.join(__dirname, 'build/js')
  },
  devtool: 'source-map'
};