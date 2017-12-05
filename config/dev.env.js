'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ULR:'"//www.u-le.net"',
  APPKEY:'"zm592565"',/*公钥*/
  APPSECRET:'"592565"',/*秘钥*/
  TIMESTAMP:new Date().getTime(),
})
