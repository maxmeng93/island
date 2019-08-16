const Ajv = require('ajv');
const Router = require('koa-router');
const router = new Router();

const { ParameterException } = require('../../../core/http-exception');

router.get('/v1/:id/classic/latest', async (ctx, next) => {
  let schema = {
    type: 'object',
    properties: {
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'number'
          }
        }
      }
    }
  };
  var ajv = new Ajv();
  var valid = ajv.validate(schema, { params: { id: '' } });
  if (!valid) {
    const error = new ParameterException({message: '参数验证错误', details: ajv.errors});
    throw error;
  }
 
  ctx.body = 'success';
});

module.exports = router;
