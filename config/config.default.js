'use strict';

module.exports = appInfo => {
  const config = exports = {

      view : {
          defaultViewEngine: 'nunjucks',
          mapping: {
              '.tpl': 'nunjucks',
          }
      }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_012345678901';

  // add your config here
  config.middleware = [];

  return config;
};
