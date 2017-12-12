'use strict';

module.exports = function (app, cb) {
  app.models.person.observe('persist', (ctx, next) => {
    if (ctx.currentInstance && ctx.currentInstance.address === 'Mars') {
      next(new Error('Invalid address'));
    } else {
      next()
    }
  });
  cb();
};