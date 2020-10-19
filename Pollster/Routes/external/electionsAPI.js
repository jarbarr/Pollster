const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  elections: (setElection) => {
    let options = {
      url: `https://www.googleapis.com/civicinfo/v2/elections?key=${config.Google.API_KEY}`,
      method: 'get',
      headers: {'Accept': 'application/json'},
    }
    axios(options)
      .then((res) => {
        // console.log('election data', res.data.elections)
        let container = [];
          container = res.data.elections.map((unit) => {
            let data = {};
            data.id = unit.id;
            data.date = unit.electionDay;
            data.title = unit.name;
            return data
          })
          return setElection(container);
      })
      .catch((err) => {
        console.error('electionsAPI error!:', err);
      });
  },
  localElectionsInfo: (setElections, clientInfo) => {
    let options = {
      url: `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${config.Google.API_KEY}&address=${clientInfo.address1}${clientInfo.city}${clientInfo.state}&electionId=7000`,
      method: 'get',
      headers: {'Accept': 'application/json'},
    }
    axios(options)
      .then((res) => {
        // console.log('election data', res.data.state)
        let container = [];
          container = res.data.state.map((unit) => {
            let data = {};
            // data.id = unit.id;
            data.ballotInfoUrl = unit.electionAdministrationBody.ballotInfoUrl;
            data.correspondenceAddress = unit.electionAdministrationBody.correspondenceAddress;
            data.electionInfoUrl = unit.electionAdministrationBody.electionInfoUrl;
            data.votingLocationFinderUrl = unit.electionAdministrationBody.votingLocationFinderUrl;
            data.sources = unit.sources;
            console.log(data.sources)
            return data
          })
          // console.log('container:', container)
          return setElections(container);
      })
      .catch((err) => {
        console.error('electionsAPI error!:', err);
      });
  }
}
// https://developers.google.com/civic-information/docs/v2/elections/electionQuery#try-it