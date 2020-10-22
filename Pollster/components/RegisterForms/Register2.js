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

import NextButton from '../Buttons/Main/Register/NextForm.js';
import LastButton from '../Buttons/Main/Register/LastForm.js';

const dbms = require('../../Routes/internal/DBMS.js');

const Register2 = (props) => {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const setFormInfo = () => {
    let info = {};
    info.address1 = address1;
    info.address2 = address2;
    info.city = city;
    info.state = state;
    info.zip = zip;
    // console.log(info);
    props.setForm2(info);
  };
  // const handleChange = () => { };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <TouchableOpacity style={styles.close} onPress={() => {
            props.close(false);
            props.setPage(0);
          }}>
            <View>
              <Text style={styles.closeText}>&#x2715;</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.sectionContainer} >
            <TouchableOpacity style={styles.textInput}>
            <TextInput placeholder="Address Line1" style={styles.sectionTitle1} onChangeText={text => setAddress1(text)} value={address1} keyboardType={'default'} maxLength={15} autoCapitalize={'none'}></TextInput>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.textInput}>
            <TextInput placeholder="Address Line2" style={styles.sectionTitle} onChangeText={text => setAddress2(text)} value={address2} keyboardType={'default'} maxLength={15} autoCapitalize={'none'}></TextInput>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.textInput}>
            <TextInput placeholder="City" style={styles.sectionTitle}
              onChangeText={text => setCity(text)} value={city} keyboardType={'default'} maxLength={30} autoCapitalize={'none'}></TextInput>
              </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.textInput}>
            <TextInput placeholder="State" style={styles.sectionTitle} onChangeText={text => setState(text)} value={state} keyboardType={'default'} maxLength={15} autoCapitalize={'none'}></TextInput>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.textInput}>
            <TextInput placeholder="Zipcode" style={styles.sectionTitle} onChangeText={text => setZip(text)} value={zip} keyboardType={'default'} maxLength={15} autoCapitalize={'none'}></TextInput>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <LastButton page={props.page} last={props.setPage} />
            <NextButton setForm={setFormInfo} page={props.page} next={props.setPage}/>
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
    marginBottom: 20,
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
    // flex: 1,
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 15,
    marginBottom: 0,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    marginTop: 15,
    marginBottom: 0,
    flexDirection: 'row',
  },
  textInput: {
    // elevation: 6,
    // shadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    // shadowOffset: { width: 1, height: 13 },
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
    // marginTop: 2,
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

export default Register2;
