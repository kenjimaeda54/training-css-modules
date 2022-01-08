const path = require('path');


module.exports = { 
  mode: "development",
  entry: './src/index.js',
  output: { 
    path: path.resolve(__dirname, 'public/bundle'),
    filename: 'index.js'
  },
  devServer:{
    static: {
       directory: "public"
    },
    hot: true,
    port: 3000,
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: {
      index: 'index.html'
    },
  },
  module: { 
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {

        test: /\.css$/i,

        use: [

          {

            loader: 'style-loader',

            options: {

              injectType: 'singletonStyleTag',

            },

          },

          {

            loader: 'css-loader',

            options: {

              modules: {
                localIdentName: "[name]-[local]-[hash:base64:5]",
              },

            },

          },

        ],

      },
      {

        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource',
 
      },
    ]
  }
}