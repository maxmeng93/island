class HttpException extends Error {
  constructor({message = '服务器异常', details = null, errorCode = 10000, code = 400}) {
    super();
    this.message = message;
    this.details = details;
    this.errorCode = errorCode;
    this.code = code;
  }
}

class ParameterException extends HttpException {
  // constructor({message = '参数错误', details = null, errorCode = 10000}) {
  constructor({message, details, errorCode}) {
    super();
    console.log(message);
    console.log(details);
    console.log(errorCode);
    this.msg = message;
    this.details = details;
    this.errorCode = errorCode;
    this.code = 400;
  }
}

class NotFound extends HttpException {
  constructor({message = '资源未找到', details = null, errorCode = 10000}) {
    super();
    this.message = message;
    this.details = details;
    this.errorCode = errorCode;
    this.code = 404;
  }
}

module.exports = {
  HttpException,
  ParameterException,
  NotFound
};
