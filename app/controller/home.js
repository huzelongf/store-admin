'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      console.log(process.env.NODE_ENV)
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};
