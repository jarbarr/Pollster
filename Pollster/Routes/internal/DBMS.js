const axios = require('axios');

module.exports = {
  getClientInfo: (info, setClient) => {
    console.log('clientInfo about to be sent', info);
    let options = {
      url: 'http://localhost:5291/users',
      method: 'get',
      params: info
    };
    axios(options)
      .then((response)=> {
        console.log(response.data);
        setClient(response.data);
      })
      .catch(console.error)
  },
  registerClient: (info) => {
    console.log('data about to be sent:', info);
    let options = {
      url: 'http://localhost:5291/users',
      method: 'post',
      data: info,
    }
    axios(options)
      .then((response)=> {console.log('client has been registered', response.data)})
      .catch(console.error)
  },
  updateClientInfo: (info) => {
    let options = {
      url: 'http//:localhost:5291/users',
      method: 'patch',
      data: {
        client: `${info}`
      }
    }
    axios(options)
      .then(console.log)
      .catch(console.error)
  },
}