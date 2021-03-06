'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 不同环境使用不同的域名
  // 如果使用json-server这里只能填写http://localhost:3000
  API_ROOT: ' " https://www.easy-mock.com/mock/5c641bcfb2d34e3b246b9e2e/data/lisy" '
})
