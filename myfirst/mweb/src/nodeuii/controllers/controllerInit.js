import indexController from './indexController';
const controllerInit = {
    getAllrouters(app, router) {
        app.use(router(_ => {
            _.get('/', indexController.indexAction());
        }))
    }
};
export default controllerInit;