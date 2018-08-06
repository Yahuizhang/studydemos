const errorHandler={
    error(app,logger){
        app.use(async(ctx,next)=>{
            try{
                await next();
            }catch(error){
                logger.error(error);
                ctx.status=error.status || 500;
                ctx.body="error page";
            }
        })
        // 404
        app.use(async(ctx,next)=>{
            await next();
            if(404 != ctx.status) return;
            ctx.status = 404;
            ctx.body = `<script type="text/javascript" src="http://www.qq.com/404/search_children.js?edition=small" charset="utf-8"></script>`;
        })
    }
}
export default errorHandler;