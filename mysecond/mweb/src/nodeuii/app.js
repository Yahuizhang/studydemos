import Koa from 'koa';
import controllerInit from './controllers/controllerInit'
import router from 'koa-simple-router'
import config from './config/index'
// import { start } from 'repl';
import log4js from 'log4js'

const app = new Koa();
// const config = configure(app);

// 日志文件
log4js.configure({
    appenders: { cheese: { type: 'file', filename: './logs/zhy.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');


controllerInit.getAllrouters(app, router);
app.listen(config.port, () => {
    logger.error('Cheese is too ripe!');
    console.log(`port ${config.port} startd`);
})