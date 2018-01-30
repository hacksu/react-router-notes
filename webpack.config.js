 var path = require('path');
 var webpack = require('webpack');
     
 module.exports = {
     entry: './src/app.jsx',
     output: {
         path: path.resolve(__dirname, 'build'),
         publicPath: 'build',
         filename: 'bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.jsx$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2016', 'react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };