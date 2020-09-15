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

import Header from './Header.js';
import RegisterButton from './Buttons/RegisterButton.js';
import SubmitButton from './Buttons/SubmitButton.js';
import LoginButton from './Buttons/LoginButton.js';
import StatusButton from './Buttons/StatusButton.js';
import NewsButton from './Buttons/NewsButton.js';
import Login from './Login.js';
import Register from './Register.js';

const routes = require('../Routes/externalAPI.js');
const pollster = require('../Routes/pollsterDB.js');

const Main = (props) => {
  const [news, setNews] = useState([]);
  const [statusVisible, setStatus] = useState(false);
  const [regVisible, setRegVisible] = useState(false);
  const [loginVisible, setLogin] = useState(false);
  const [calendarZoom, setCalendar] = useState(false);
  const [newsVisible, seeNews] = useState(false);
  const getNews = () => {
    // routes.NYT.Politics(setNews);
    routes.Guardian(setNews);
    console.log(news);
  }
  const addUser = (clientInfo) => {
    pollster.registerClient(clientInfo);
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
            <Modal
              animationType="slide"
              transparent={true}
              visible={statusVisible}
              onRequestClose={() => {
              }}>
              <View style={styles.centeredView}>
                <View style={styles.regView}>
                <TouchableOpacity style={styles.close2} onPress={() => {
                    setStatus(false);
                  }}>
                    <View>
                      <Text style={styles.closeText}>&#x2715;</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                  <Text style={styles.linkHelpers}>Click the Link</Text>
                  <Text style={styles.linkHelpers}>to see your status</Text>
                  <Text style={styles.links}
                    onPress={() => Linking.openURL('https://www.vote.org/')}>
                    https://www.vote.org/
                  </Text>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={regVisible}
              onRequestClose={() => {
              }}>
              <View style={styles.centeredView}>
                <View style={styles.regView}>
                  <Register set={setRegVisible} />
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={loginVisible}
              onRequestClose={() => {
              }}>
              <View style={styles.centeredView}>
                <View style={styles.regView}>
                  <Login set={setLogin} />
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={calendarZoom}
              onRequestClose={() => {
              }}>
              {/* <ScrollView contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}> */}
              <View style={styles.centeredView}>
                <View style={styles.regView}>
                  <TouchableOpacity style={styles.close} onPress={() => {
                    setCalendar(false);
                  }}>
                    <View>
                      <Text style={styles.closeText}>&#x2715;</Text>
                    </View>
                  </TouchableOpacity>
                  <Image source={require('../static/zoom1.png')} style={styles.calendarZoom} />
                  <Image source={require('../static/zoom2.png')} style={styles.calendarZoom} />
                </View>
              </View>
              {/* </ScrollView> */}
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={newsVisible}
              onRequestClose={() => {
              }}>
              <View style={styles.centeredView}>
                <View style={styles.regView}>
                <TouchableOpacity style={styles.close2} onPress={() => {
                    seeNews(false);
                  }}>
                    <View>
                      <Text style={styles.closeText}>&#x2715;</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                  <Text
                    // onPress={() => Linking.openURL('http://google.com')}
                    >
                  </Text>
                  </View>
                </View>
              </View>
            </Modal>
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
              <NewsButton seeNews={seeNews} news={getNews}>What's New(s)?</NewsButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  links: {
    color: 'rgb(51,102,187)',
    fontWeight: 'bold',
    margin: 10,
  },
  linkHelpers: {
    marginLeft: 10
  },
  calendar: {
    flex: 1,
    aspectRatio: 1.5,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  calendarZoom: {
    flex: 1,
    aspectRatio: 1,
    height: 400,
    width: 400,
    resizeMode: "contain",
    marginLeft: 5,
    // transform: [{ rotate: '270deg' }],
  },
  close: {
    flex: 1,
    position: 'absolute',
    right: 50,
    top: 20,
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
  closeText: {
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'center',
    zIndex: 5,
  },
  regView: {
    margin: 20,
    backgroundColor: "rgb(236, 235, 250)",
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
    backgroundColor: 'rgb(236, 235, 250)',
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
