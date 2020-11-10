import React, {useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './components/Main.js';
import HomePage from './components/UserHomePage.js';
import Settings from './components/Settings.js';
import Vote from './components/Vote.js';

// const crypto = require('./crypto')
const routes = require('./Routes/external/newsAPI.js');
const electionInfo = require('./Routes/external/electionsAPI.js');
const DBMS = require('./Routes/internal/DBMS.js');
const Crypto = require('./Routes/internal/Crypto.js');
// const secp256k1 = require('secp256k1');
// const { randomBytes, createHash } = require('react-native-crypto');

const App: () => React$Node = () => {
  const [homePage, clientHome] = useState(false);
  const [main, setMain] = useState(true);
  const [client, setClient] =useState({});
  const [election, setElection] = useState([]);
  const [settings, setSettings] = useState(false);
  const [Twilio, setTwilio] = useState(true);
  const [vote, goVote] = useState(false);
  const [privKey, setPrivKey] = useState('');
  const [pubKey, getPubKey] = useState('');
  const [signature, sign] = useState('');
  const [ballot, setBallot] = useState('');

  const findUser = (clientInfo) => {
    // console.log('app.js - clientInfo:', clientInfo);
    DBMS.getClientInfo(clientInfo, setClient);
    if (client.email === clientInfo.email && client.mobile === clientInfo.mobile && client.password === clientInfo.password) {
      setTimeout(() => {
        clientHome(true);
        setMain(false);
      }, 400);
    }
  }

  const googleElectionAPI = () => {
    // console.log('click!');
    electionInfo.elections(setElection);
    // console.log(election);
  }

  const generateSignature = () => {
    // console.log(ballot);
    Crypto.signAndVerify(client.private_key, client.public_key,ballot, sign);
    console.log(`signature: ${signature}`);
  }

  const updateUserInfo = (updates) => {
    DBMS.updateClientInfo(updates);
  }

  // useEffect(() => {
  //   console.log(ballot);
  //   console.log(client.private_key);
  //   Crypto.signAndVerify(client.private_key, client.public_key,ballot, sign);
  //   console.log(signature);
  // }, [ballot])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {main ? <Main google={googleElectionAPI} election={election} setElection={setElection} findUser={findUser} setPrivKey={setPrivKey} getPubKey={getPubKey} privKey={privKey} pubKey={pubKey}/> : null}
          {homePage ? <HomePage settings={setSettings} election={election} user={client} main={setMain} goVote={goVote} leave={clientHome}/> : null}
          {settings ? <Settings updateUserInfo={updateUserInfo} signature={signature} user={client} twilio={Twilio} setTwilio={setTwilio} user={client} settings={setSettings} home={clientHome}/> : null}
          {vote ? <Vote generateSignature={generateSignature} ballot={ballot} setBallot={setBallot} user={client} home={clientHome} goVote={goVote} /> : null}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
