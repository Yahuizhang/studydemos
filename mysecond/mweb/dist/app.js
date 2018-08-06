'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _index = require('./config/index');

var _index2 = _interopRequireDefault(_index);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _errorHandler = require('./middlewares/errorHandler.js');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { start } from 'repl';
const app = new _koa2.default();
// const config = configure(app);

// 错误日志文件
_log4js2.default.configure({
    appenders: { cheese: { type: 'file', filename: `${__dirname}/logs/zhy.log` } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = _log4js2.default.getLogger('cheese');

// 错误处理中心,要放在所有的前面，是最重要的
_errorHandler2.default.error(app, logger);

// 集中处理所有的路由
_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default);

app.listen(_index2.default.port, () => {
    logger.error('Cheese is too ripe!');
    console.log(`port ${_index2.default.port} startd`);
});