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

import SubmitButton from './Buttons/SubmitButton.js';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => { };
  const handleChange = () => {  };
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
            <TextInput placeholder="email" name="email" value={email} style={styles.sectionTitle} onChange={handleChange}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="mobile" name="mobile" value={mobile} style={styles.sectionTitle} onChange={handleChange}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="password" secureTextEntry={true} name="password" onChange={handleChange} value={password} style={styles.sectionTitle}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <SubmitButton>
              <Text>Submit</Text>
            </SubmitButton>
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

export default Login;
