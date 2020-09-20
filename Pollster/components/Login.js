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

import Submit2Button from './Buttons/Submit2Button.js';

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
            props.set(false);
          }}>
            <View>
              <Text style={styles.closeText}>&#x2715;</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Email" style={styles.sectionTitle}
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
            <Submit2Button findUser={handleSubmit}>
              <Text>Submit</Text>
            </Submit2Button>
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
    backgroundColor: 'rgb(236, 235, 250)',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
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

export default Login;
