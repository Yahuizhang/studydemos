"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const errorHandler = {
    error(app, logger) {
        app.use(async (ctx, next) => {
            // try{
            //     await next();
            // }catch(error){
            //     logger.
            // }
        });
    }
};
exports.default = errorHandler;