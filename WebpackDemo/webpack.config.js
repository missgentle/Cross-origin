const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',  //webpack4必须要指定的参数，'development' or 'production'
  entry: './src/script/index.ts',  //入口，可以是包含多个入口的对象
  output: {  //出口只能有一个
    filename: 'script/[name].js',  //输出的文件名
    path: path.resolve(__dirname, '/dist')  //dist作为构建过程产生的代码最小化和优化后的“输出”目录最终将在浏览器中加载
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
  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8082'      // WebpackDemo启'8084'端口
  },
  plugins: [
  	new HtmlWebpackPlugin({ 
        title: 'Webpack WebApp',
        filename: 'index.html',
        favicon: './static/img/icon.png',
        template: 'temp/index.ejs',
        chunks: [ 'main', 'vendor'],
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [  //loader规则。webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../' 
            }
          }, 
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: [
          {
              loader: "url-loader",
              options: {
                name: "[name].[hash:5].[ext]",
                limit: 1024,
                outputPath: "img/",
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
