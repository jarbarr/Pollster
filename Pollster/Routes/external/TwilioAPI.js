const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  Twilio: (setNews) => {
  //   let options = {
  //     url: 'https://content.guardianapis.com/sections',
  //     method: 'get',
  //     headers: {
  //       'api-key': `${config.Guardian.key}`,
  //       'format': 'json',
  //       'q': 'politics',
  //     }

  //   }
  //   axios(options)
  //     .then((res) => {
  //       // console.log('whats new(s)?:', res.data.response.results)
  //       let container = [];
  //         container = res.data.response.results.map((doc) => {
  //           let data = {};
  //           data.ID = doc.id;
  //           data.title = doc.webTitle;
  //           data.url = doc.webUrl;
  //           // data.image = doc.multimedia[0].url
  //           return data
  //         })
  //         // console.log(container);
  //         return setNews(container);
  //     })
  //     .catch((err) => {
  //       console.error('no news for you!:', err);
  //     });
  // },
}