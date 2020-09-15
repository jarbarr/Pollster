const axios = require('axios');

module.exports = {
  getClientInfo: () => {
    let options = {
      url: 'http//:localhost:5291/users',
      method: 'get',
      params: {
        client: `${info}`
      }
    }
    axios()
      .then(console.log)
      .catch(console.error)
  }
  addClientInfo: (info) => {
    let options = {
      url: 'http//:localhost:5291/users',
      method: 'post',
      data: {
        client: `${info}`
      }
    }
    axios(options)
      .then(console.log)
      .catch(console.error)
  }
}