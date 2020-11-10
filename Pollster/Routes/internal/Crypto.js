const axios = require('axios');

module.exports = {
  generateKeys: (setKeys) => {
    axios.get('http://localhost:5291/keys')
      .then((res) => {
        console.log(`Routes/Crypto/privKey - success: ${res}`);
        setKeys(res.data);
      })
      .catch(err => console.error(`Routes/Crypto/privKey - err: ${err}`))
  },

  signAndVerify: (privKey, pubKey, ballot, sign) => {
    axios.put('http://localhost:5291/sign', {
      privateKey: `${privKey}`, publicKey:`${pubKey}`, ballot: `${ballot}`
    })
      .then((res) => {
        console.log(`signature recieved by client: ${res.data}`);
        sign(res.data);
      })
      .catch(console.log)
  },
};