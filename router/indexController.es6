import indexModel from '../api/indexModel'
const indexController = {
  index(){
    return async(ctx,next)=>{
      ctx.body = await ctx.render('index.html',{
        title:'大拇指点赞'
      })
    }
  },
  addNum(){
    return async(ctx,next)=>{
      const indexM = new indexModel(ctx);
      ctx.body = await indexM.updateNum();
    }
  }
}
export default indexController;