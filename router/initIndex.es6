import indexController from './indexController'
const InitController = {
  init(app,router){
    app.use(router(_=>{
      _.get('/index.html',indexController.index())
      _.get('/addNum',indexController.addNum())
    }))
  }
}
export default InitController;