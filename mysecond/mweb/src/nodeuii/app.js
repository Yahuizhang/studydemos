import Koa from 'koa';
import controllerInit from './controllers/controllerInit'
import router from 'koa-simple-router'
import config from './config/index'
// import { start } from 'repl';
import log4js from 'log4js'
import errorHandler from './middlewares/errorHandler.js'
import render from 'koa-swig'
import co from 'co'
import server from 'koa-static'

const app = new Koa();
app.context.render=co.wrap(render({
    root:config.viewDir,  // 模板根目录
    autoescope:true, //自动去一些
    cache:'memory', //把缓存放到内存
    ext:'html',
}))

// 错误日志文件
log4js.configure({
    appenders: { cheese: { type: 'file', filename: `${__dirname}/logs/zhy.log` } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');


// 错误处理中心,要放在所有的前面，是最重要的
errorHandler.error(app,logger);


// 集中处理所有的路由
controllerInit.getAllrouters(app, router);

// 静态资源管理
app.use(server(config.staticDir));

app.listen(config.port, () => {
    logger.error('Cheese is too ripe!');
    console.log(`port ${config.port} startd`);
})