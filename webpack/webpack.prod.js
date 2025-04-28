const { merge } = require('webpack-merge');  
const common = require('./webpack.common.js');  
const path = require('path');  

module.exports = merge(common, {  
  mode: 'production',  
  output: {  
    filename: '[name].[contenthash].js',  
    path: path.resolve(__dirname, '../dist'),  
    publicPath: '/'  
  },  
  optimization: {  
    moduleIds: 'deterministic',  
    runtimeChunk: 'single',  
    splitChunks: {  
      cacheGroups: {  
        vendor: {  
          test: /[\\/]node_modules[\\/]/,  
          name: 'vendors',  
          chunks: 'all'  
        }  
      }  
    }  
  }  
});