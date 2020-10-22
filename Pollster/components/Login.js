import React, { useState } from 'react';
import {
  SafeAreaView,
  Form,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SubmitButton from './Buttons/Main/Login/Submit.js';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    let info = {};
    info.email = email;
    info.mobile = mobile;
    info.password = password;
    // console.log(info);
    props.findUser(info);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <TouchableOpacity style={styles.close} onPress={() => {
            props.setLogin(false);
          }}>
            <View>
              <Text style={styles.closeText}>&#x2715;</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Email" style={styles.sectionTitle1}
              onChangeText={text => setEmail(text)} value={email} keyboardType={'email-address'} maxLength={30} autoCapitalize={'none'}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Mobile" style={styles.sectionTitle} onChangeText={text => setMobile(text)} value={mobile} keyboardType={'phone-pad'} maxLength={15} autoCapitalize={'none'}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Password" style={styles.sectionTitle}
              onChangeText={text => setPassword(text)} value={password} keyboardType={'default'} maxLength={20} autoCapitalize={'none'}
              secureTextEntry={true}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <SubmitButton findUser={handleSubmit}/>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  close: {
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 500,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    zIndex: 3,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  closeText: {
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 24,
  },
  textInput: {
    elevation: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },
  sectionTitle: {
    marginTop: 1,
    padding: 15,
    width: 200,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    backgroundColor: Colors.white,
    textAlign: 'center',
  },
  sectionTitle1: {
    marginTop: 40,
    padding: 15,
    width: 200,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    backgroundColor: Colors.white,
    textAlign: 'center',
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

export default Login;
