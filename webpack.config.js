'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}