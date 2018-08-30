import indexController from './indexController'
const InitController = {
  init(app,router){
    app.use(router(_=>{
      _.get('/index.html',indexController.index())
    }))
  }
}
export default InitController;