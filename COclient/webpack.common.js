const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var entryPath = './';
const TITLE = 'Progressive Web App'; 
const pages = ['index','offline'];
               
function getEntry(){
  let entry = {};
  pages.forEach(elem=>{
    entry[elem] = `${entryPath}src/script/${elem}.ts`;
  });
  return entry;
}

function getPlugins(){
  let plugins = [];
  pages.forEach(elem=>{
    plugins.push(new HtmlWebpackPlugin({ 
            title: TITLE,
            filename: `${elem}.html`,
            favicon: './src/img/icon.jpg',
            template: `templates/${elem}.ejs`,
            chunks: [ elem, 'vendor'],
    }));
  });
  return plugins;
}

module.exports = {
  entry: getEntry(),
  plugins: [
  ...getPlugins(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "[id].css"
    })

  ],
  output: {
    filename: 'script/[name].js',
    path: path.resolve(__dirname, '/dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../' // 特别重要，否则css文件打包后其中引用的图片文件不正确 
            }
          }, 
          'css-loader'
        ]
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: [
          {
              loader: "url-loader",
              options: {
                name: "[name].[hash:5].[ext]",
                limit: 1024, // size <= 1kib
                outputPath: "img",
                publicPath: "../../"

              } 
          }
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      {
        test: /\.(handlebars|hbs)$/,
        exclude: /node_modules/,
        use: [
          'handlebars-loader'
        ]
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: require.resolve('jquery'),
          use: [{
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
             options: '$'
          }
        ]
      }
    ]
  },
  resolve: {
      extensions: [".js", ".ts"],
      alias: {
        '@': path.join(__dirname, "src"),
      }
  }
};
