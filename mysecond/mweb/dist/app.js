'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _index = require('./config/index');

var _index2 = _interopRequireDefault(_index);

var _repl = require('repl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
// const config = configure(app);
_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default);
app.listen(_index2.default.port, () => {
    console.log(`port ${_index2.default.port} startd`);
});