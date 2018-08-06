import Koa from 'koa';
import controllerInit from './controllers/controllerInit'
import router from 'koa-simple-router'
import config from './config/index'
import { start } from 'repl';
const app = new Koa();
// const config = configure(app);
controllerInit.getAllrouters(app, router);
app.listen(config.port, () => {
    console.log(`port ${config.port} startd`);
})