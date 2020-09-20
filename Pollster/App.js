import React, {useState} from 'react';
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

const pollster = require('./Routes/pollsterDB.js');

const App: () => React$Node = () => {
  const [homePage, clientHome] = useState(false);
  const [main, setMain] = useState(true);
  const [client, setClient] =useState({});

  const findUser = (clientInfo) => {
    // console.log('app.js:', clientInfo);
    pollster.getClientInfo(clientInfo, setClient);
    console.log(client);
    if (client.email === clientInfo.email && client.mobile === clientInfo.mobile) {
      setTimeout(() => {
        clientHome(true);
        setMain(false);
      }, 600);

    }
    // setClient(user);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {main ? <Main findUser={findUser} /> : null}
          {homePage ? <HomePage user={client} main={setMain} signIn={clientHome}/> : null}
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
