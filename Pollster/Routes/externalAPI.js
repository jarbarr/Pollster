const axios = require('axios');
const config = require('../config.js');

module.exports = {
  Guardian: (setNews) => {
    let options = {
      url: 'https://content.guardianapis.com/sections',
      method: 'get',
      headers: {
        'api-key': `${config.Guardian.key}`,
        'format': 'json',
        'q': 'politics',
      }

    }
    axios(options)
      .then((res) => {
        // console.log('whats new(s)?:', res.data.response.results)
        let container = [];
          container = res.data.response.results.map((doc) => {
            let data = {};
            data.ID = doc.id;
            data.title = doc.webTitle;
            data.url = doc.webUrl;
            // data.image = doc.multimedia[0].url
            return data
          })
          // console.log(container);
          return setNews(container);
      })
      .catch((err) => {
        console.error('no news for you!:', err);
      });
  },
  NYT: {
    RSS: () => {
      axios.get('https://api.nytimes.com/services/xml/rss/nyt/politics.xml')
        .then((res) => {
          console.log('whats new(s)?:', res)
          return res.body;
        })
        .catch((err) => {
          console.error('no news for you!:', err);
        });
    },
    Politics: (setNews) => {
      let options = {
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        method: 'get',
        params: {
          'q': 'politics',
          'api-key': `${config.NYT.key}`

        },
      }
      axios(options)
        .then((res) => {
          console.log('whats new(s)?:', res.data.response.docs[0].abstract);
          let container = [];
          container = res.data.response.docs.map((doc) => {
            let data = {};
            data.headline = doc.abstract;
            data.url = doc.web_url;
            data.image = doc.multimedia[0].url
            return data
          })
          console.log(container);
          setNews(container);
        })
        .catch((err) => {
          console.error('no news for you!:', err);
        });
    },
  },
}