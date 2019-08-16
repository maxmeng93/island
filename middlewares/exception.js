const { HttpException } = require('../core/http-exception');

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (global.config.env === 'dev') console.log(error);
    
    if (error instanceof HttpException) {
      ctx.body = {
        message: error.message,
        details: error.details,
        errorCode: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
    } else {
      ctx.body = {
        message: '服务端异常',
        details: null,
        errorCode: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500;
    }
  }
};

module.exports = catchError;
