'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index(ctx) {
      let count = ctx.cookies.get('count');
      ctx.cookies.set('count', '我', { encrypt: true} );

      console.log('这里应该是密文??  =>>>>>', ctx.cookies.get('count', { encrypt: true }))
      console.log('---------------')
      console.log('这里应该是密文??  =>>>>>', ctx.cookies.get('count'))

      
      ctx.body = {
        'encrypt': ctx.cookies.get('count', { encrypt: true}),
        'noencrypt': ctx.cookies.get('count') === undefined ? 'undefiend' : ctx.cookies.get('count'),
      }
    }
  }
  return HomeController;
};
