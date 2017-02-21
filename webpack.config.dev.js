import path from 'path';

export default {
  devtool: 'inline-source-map',
  devServer: {
    noInfo: false
  },
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
    module: {
    rules: [
      {test: /\.js$/,
      exclude: [
        /node_modules/
      ],
    loader: 'babel-loader'
      },
      {test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};
