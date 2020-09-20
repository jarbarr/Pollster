import React, { useState } from 'react';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SubmitButton from './Buttons/SubmitButton.js';
const dbms = require('../Routes/pollsterDB.js');

const Register = (props) => {
  const [fn, setfn] = useState('');
  const [ln, setln] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [party, setParty] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    let info = {};
    info.firstName = fn;
    info.lastName = ln;
    info.email = email;
    info.mobile = mobile;
    info.party = party;
    info.password = password;
    // console.log(info);
    props.client(info);
  };
  // const handleChange = () => { };
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
          <View style={styles.sectionContainer} >
            <TextInput placeholder="First Name" style={styles.sectionTitle} onChangeText={text => setfn(text)} value={fn} keyboardType={'default'} maxLength={15} autoCapitalize={'none'}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Last Name" style={styles.sectionTitle} onChangeText={text => setln(text)} value={ln} keyboardType={'default'} maxLength={15} autoCapitalize={'none'}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Email" style={styles.sectionTitle}
              onChangeText={text => setEmail(text)} value={email} keyboardType={'email-address'} maxLength={30} autoCapitalize={'none'}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Mobile" style={styles.sectionTitle} onChangeText={text => setMobile(text)} value={mobile} keyboardType={'phone-pad'} maxLength={15} autoCapitalize={'none'}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <Picker placeholder="Party (optional)" selectedValue={party} style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setParty(itemValue)}>
              <Picker.Item label="Democrat" value="Democrat" />
              <Picker.Item label="Republican" value="Republican" />
              <Picker.Item label="Indepenedent" value="Independent" />
              <Picker.Item label="Libertarian" value="Libertarian" />
              <Picker.Item label="Green Party" value="Green Party" />
            </Picker>
          </View>
          {/* <View style={styles.sectionContainer}>
            <TextInput placeholder="Party (optional)" style={styles.sectionTitle}
            onChangeText={text => setParty(text)} value={party} keyboardType={'default'} maxLength={15} autoCapitalize={'none'}></TextInput>
          </View> */}
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Password" style={styles.sectionTitle}
              onChangeText={text => setPassword(text)} value={password} keyboardType={'default'} maxLength={20} autoCapitalize={'none'}
              secureTextEntry={true}></TextInput>
          </View>
          <View style={styles.sectionContainer}>
            <SubmitButton submit={handleSubmit}>
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
    bottom: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    zIndex: 3,
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginBottom: 10,
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
    // flex: 1,
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
  picker: {
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

export default Register;
