<script src="http://localhost:8097"></script>
const axios = require('axios');
const config = require('../config.js');
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

import H1 from './H1.js';
import RegisterButton from './Buttons/RegisterButton.js';
import Login from './Login.js';
import Register from './Register.js';

const routes = require('../Routes/externalAPI.js');

const HomePage = (props) => {
  // const [news, setNews] = useState([]);
  const clientInfo = () => {
    axios.get('http//:localhost5291/user')
      .then(console.log)
      .catch(console.log)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header style={styles.header} />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Check Voter Registration Status</Text>
              <StatusButton set={setStatus}>Status</StatusButton>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Register With Pollster</Text>
              <RegisterButton set={setRegVisible} visible={regVisible}>Register</RegisterButton>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Secure Login</Text>
              <LoginButton set={setLogin}>Login</LoginButton>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Upcoming Elections</Text>
              <Text style={styles.sectionDescription}>
                AP Election Calendar:
              </Text>
              <TouchableOpacity onPress={() => { setCalendar(true) }}>
                <Image source={require('../static/electionsCalendar.png')} style={styles.calendar} />
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>News Feed</Text>
              <NewsButton news={getNews}>What's New(s)?</NewsButton>
            </View>
          </View>
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
    backgroundColor: 'rgb(244, 241, 250)',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.5,
    // textShadowRadius: 500,
    // shadowOffset: {width: 10, height: 3 },
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

export default Main;
