module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
module: {
  rules: [
    {
      test: /\.html$/,
      use: 'html-loader'
    }
  ]
}

const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};