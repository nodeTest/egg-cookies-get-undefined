'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = 'key1,key2',

  // add your config here
  config.middleware = [];

  return config;
};