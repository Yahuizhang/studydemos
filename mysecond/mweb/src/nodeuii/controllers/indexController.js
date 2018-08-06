import IndexModel from '../models/IndexModel';
const IndexController = {
    indexAction() {
        return async(ctx, next) => {
            const indexModel = new IndexModel();
            const result = await indexModel.getData();
            ctx.body = await ctx.render("index",{data:result});
        }
    }
}
export default IndexController;