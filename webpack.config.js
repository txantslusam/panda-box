const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeEnv = process.env.NODE_ENV || 'development'
const devMode = nodeEnv !== 'production';

module.exports = {
  mode: nodeEnv,
  entry: [
    './src/pcss/main.pcss',
    './src/ts/main.ts',
  ],
  output: {
    library: 'PandaBox',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'pandaBox.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  stats: {
    entrypoints: false,
    children: false,
 },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pcss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: devMode } },
          { loader: 'postcss-loader', options: { sourceMap: devMode } },
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]'
        }
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "pandaBox.css",
    }),
    new TSLintPlugin({
      files: ['./src/ts/**/*.ts'],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  }
}
