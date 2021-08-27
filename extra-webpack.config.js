const webpack = require('webpack');

module.exports = {
    module: {
      rules: [
        {
          test: /\.cool$/,
          use: 'cool-loader'
        }
      ]
    }
};