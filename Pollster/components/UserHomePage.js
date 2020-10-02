{/* <script src="http://localhost:8097"></script> */}
import React, { useState, useEffect } from 'react';
import { Colors,} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Animated,
  Modal,
  Alert,
  Button,
  ImageBackground,
  Linking,
} from 'react-native';

import H1 from './UserHeader.js';
// import StatusButton from './Buttons/StatusButton.js';
import LogoutButton from './Buttons/LogoutButton.js';
import Login from './Login.js';
import StatusButton from './Buttons/StatusButton.js';
import VoteButton from './Buttons/VoteButton.js';
import VoterInfoButton from './Buttons/VoterInfoButton.js';
import NewsButton from './Buttons/NewsButton.js';
import StatisticsButton from './Buttons/StatisticsButton.js';
import SettingsButton from './Buttons/SettingsButton.js';
import StatusModal from './Modals/StatusModal.js';
import ElectionsModal from './Modals/ElectionsModal.js';
import NewsModal from './Modals/NewsModal.js';
import UserH2 from './UserH2.js';
import UserH3 from './UserH3.js';
import UserH4 from './UserH4.js';

const routes = require('../Routes/external/newsAPI.js');
const google = require('../Routes/external/electionsAPI.js');
const DBMS = require('../Routes/internal/DBMS.js');

const HomePage = (props) => {
  const [statusVisible, setStatus] = useState(false);
  const [newsVisible, seeNews] = useState(false);
  const [news, setNews] = useState([]);
  const [elections, setElections] = useState([]);
  const [electionsVisible, seeElections] = useState(false);
  const getNews = () => {
    routes.NYT.Politics(setNews);
    // routes.Guardian(setNews);
    console.log('yay:', news);
    // setNews(newsies);
  }
  const getElections = () => {
    google.localElectionsInfo(setElections, props.user);
    // routes.Guardian(setNews);
    console.log('yay:', elections);
    // setNews(newsies);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <H1 user={props.user}/>
          <View style={styles.body}>
          <StatusModal setStatus={setStatus} statusVisible={statusVisible}/>
            <NewsModal news={news} newsVisible={newsVisible} seeNews={seeNews}/>
            <ElectionsModal elections={elections} electionsVisible={electionsVisible} seeElections={seeElections}/>
            <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
            <UserH2 />
              <Text style={styles.sectionTitle}>Voter Registration</Text>
              <StatusButton set={setStatus}>Status</StatusButton>
              <Text style={styles.sectionTitle}>More Info</Text>
              <VoterInfoButton seeElections={seeElections} getElections={getElections}/>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
            <UserH3 />
              <Text style={styles.sectionTitle}>Past Elections</Text>
              <StatisticsButton/>
              <Text style={styles.sectionTitle}>News Feed</Text>
              <NewsButton seeNews={seeNews} news={getNews}>What's New(s)?</NewsButton>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
            <UserH4 />
              <Text style={styles.sectionTitle}>Vote Here</Text>
              <VoteButton/>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.sectionContainer}> */}
            <View style={styles.footer}>
              {/* <TouchableOpacity style={styles.footerFiller}> */}
            {/* <View style={styles.sectionContainer}> */}
              <SettingsButton/>
              <LogoutButton home={props.main} leave={props.leave}/>
            {/* </View> */}
              {/* <Text style={styles.footerText}></Text> */}
              {/* </TouchableOpacity> */}
            {/* </View> */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  close2: {
    flex: 1,
    position: 'absolute',
    right: 10,
    top: 15,
    bottom: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    zIndex: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  main: {
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 30,
    shadowOpacity: 4,
    backgroundColor: Colors.white,
    // color: '#FFFFFF',
    paddingBottom: 20,
    elevation: 20,
    shadowOffset: { width: 1, height: 20 },
  },
  closeText: {
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'center',
    zIndex: 5,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  grid: {
    borderWidth: 1,
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.5,
    textAlign: 'center',
    marginTop: 10,
    // textShadowRadius: 500,
    // shadowOffset: {width: 10, height: 3 },
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50
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
    marginTop: 50,
    fontWeight: '600',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingBottom: 150,
    textAlign: 'center',
  },
  footerFiller: {
    backgroundColor: '#2EE59D',
    marginTop: 40,
    padding: 20,
  },
});

export default HomePage;
