<script src="http://localhost:8097"></script>

const config = require('../config.js');

const axios = require('axios');

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
  TextInput,
} from 'react-native';
import Banner from './Banner.js';
import RegisterButton from './Buttons/Main/Register.js';
import RegisterModal from './Modals/Main/Register.js';
import LoginButton from './Buttons/Main/Login.js';
import LoginModal from './Modals/Main/Login.js';
import Login from './Login.js';
import ElectionsList from './ElectionsList.js';


const info = require('../Routes/external/electionsAPI.js');
const crypto = require('../Routes/internal/Crypto.js');
const DBMS = require('../Routes/internal/DBMS.js');

const Main = (props) => {
  const [regVisible, setRegVisible] = useState(false);
  const [loginVisible, setLogin] = useState(false);
  const [form1, setForm1] = useState({});
  const [form2, setForm2] = useState({});
  const [form3, setForm3] = useState({});
  const [reminder, setReminder] = useState('');
  const [keys, setKeys] = useState({});
  // const [user, setUser] = useState();

  useEffect(() => {
    crypto.generateKeys(setKeys);
    console.log(keys);
    props.setPrivKey(keys.privKey);
    props.getPubKey(keys.pubKey);
  }, [])

  const fetchKeys = () => {
    console.log('started fetch')
    crypto.generateKeys(setKeys);
    console.log(keys);
    props.setPrivKey(keys.privKey);
    props.getPubKey(keys.pubKey);
    setTimeout(() => {
      addUser();
    }, 200)
  }

  const addUser = () => {
    console.log('started addUser')
    let clientInfo = {};
    console.log(keys);
    // console.log(`privKey: ${props.privKey}, pubKey: ${props.pubKey}`);
    clientInfo.form1 = form1;
    clientInfo.form1.private_key = keys.privKey;
    clientInfo.form1.public_key = keys.pubKey;
    clientInfo.form2 = form2;
    clientInfo.form3 = form3;
    console.log(clientInfo)
    DBMS.registerClient(clientInfo);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Banner style={styles.header} />
          <View style={styles.body}>
            <RegisterModal reminder={reminder} setReminder={setReminder} visible={regVisible} close={setRegVisible} form1={setForm1} form2={setForm2} form3={setForm3} fetchKeys={fetchKeys}/>
            <LoginModal visible={loginVisible} setLogin={setLogin} findUser={props.findUser} setLogin={setLogin}/>
            <View style={styles.sectionContainer}>
              <TouchableOpacity style={styles.main}>
              <Text style={styles.sectionTitle}>New to Pollster?</Text>
              <RegisterButton show={setRegVisible}/>
              <Text style={styles.sectionTitle}>Already a user?</Text>
              <LoginButton set={setLogin}>Secure Login</LoginButton>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableOpacity onPress={props.google} style={styles.elections}>
                <View style={styles.line}>
              <Text style={styles.sectionDescription}>
                Upcoming Elections:
              </Text>
              </View>
                <ElectionsList elections={props.election} />
              </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Mobile Voting App</Text>
              <Text style={styles.footerText}>About</Text>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  elections: {
    marginTop: 10,
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOpacity: 3,
    elevation: 20,
    shadowRadius: 30,
    shadowOffset: { width: 1, height: 20 },
    backgroundColor: '#2EE59D',
    color: '#FFFFFF'
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
  closeText: {
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'center',
    zIndex: 5,
  },
  regView: {
    margin: 20,
    backgroundColor: Colors.white,
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
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.5,
    textAlign: 'center',
    // textShadowRadius: 500,
    // shadowOffset: {width: 10, height: 3 },
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: '500',
    color: Colors.white,
    textAlign: 'center',
    backgroundColor: '#2EE59D',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,

  },
  line: {
    //
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  footerContainer: {
    // color: Colors.dark,
    // fontSize: 12,
    // height: '800',
    // fontWeight: '600',
    // padding: 4,
    // paddingRight: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 50,
    paddingBottom: 200,
  },
  // footer: {

  //   padding: 20,
  // },
  footerText: {
    // marginTop: 8,
    // fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
    // backgroundColor: '#2EE59D',
    textAlign: 'center',
    color: '#2EE59D',
    paddingBottom: 10,
  },
});

export default Main;
