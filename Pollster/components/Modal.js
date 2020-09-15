<script src="http://localhost:8097"></script>
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Animated,
  Modal,
  Alert,
} from 'react-native';
// import { Icon } from 'react-native-elements'


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './Header.js';
import RegisterButton from './Buttons/RegisterButton.js';
import SubmitButton from './Buttons/SubmitButton.js';
import LoginButton from './Buttons/LoginButton.js';
import StatusButton from './Buttons/StatusButton.js';
import NewsButton from './Buttons/NewsButton.js';
// import Login from './Login.js';
import Register from './Register.js';
const routes = require('../Routes/externalAPI.js');

const Main = (props) => {
  const [news, setNews] = useState([]);
  const [regVisible, setRegVisible] = useState(false);
  const [calendarZoom, setCalendar] = useState(false);
  const getNews = () => {
    let newsies = routes.NYT.RSS();
    console.log(newsies);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Login /> */}
          <Header style={styles.header} />
          <View style={styles.body}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={regVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}>
                <View style={styles.centeredView}>
                  <View style={styles.regView}>
                    <Register set={setRegVisible} />
                  </View>
                </View>
              </Modal>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Check Voter Registration Status</Text>
              <StatusButton>Status</StatusButton>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Register To Vote</Text>
              <RegisterButton set={setRegVisible}>Register</RegisterButton>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Secure Login</Text>
              <LoginButton>Login</LoginButton>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Upcoming Elections</Text>
              <Text style={styles.sectionDescription}>
                AP Election Calendar:
              </Text>
              <Image onPress={}
              source={require('../static/electionsCalendar.png')} style={styles.calendar} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>News Feed</Text>
              <NewsButton onPress={getNews}>What's New(s)?</NewsButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50
  },
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

// export default Main;
