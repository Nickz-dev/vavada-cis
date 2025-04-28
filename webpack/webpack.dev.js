const { merge } = require('webpack-merge');  
const common = require('./webpack.common.js');  
const path = require('path');  

module.exports = merge(common, {  
  mode: 'development',  
  devtool: 'inline-source-map',  
  devServer: {  
    static: {  
      directory: path.join(__dirname, '../public'),  
    },  
    hot: true,  
    historyApiFallback: true,  
    port: 3000  
  },  
  output: {  
    filename: '[name].bundle.js',  
    path: path.resolve(__dirname, '../dist'),  
    publicPath: '/'  
  }  
});