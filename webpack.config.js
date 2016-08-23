module.exports = {
  entry: __dirname + '/lib/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'script.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
