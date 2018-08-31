import rpA from 'request-promise';
class indexModel {
  constructor(ctx) {
    this.ctx = ctx;
  }
  updateNum() {
    const options = {
      method: 'GET',
      uri: 'http://localhost/php/praiseThumb.php'
    }
    return new Promise((resolve, reject) => {
      rpA(options).then(result => {
        const info = JSON.parse(result);
        if (info) {
          resolve({ data: info });
        } else {
          reject({})
        }
      })
    })
    console.log(info);
  }
}
export default indexModel;