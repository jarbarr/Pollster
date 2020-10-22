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

import SubmitButton from '../Buttons/SubmitButton.js';
import LastButton from '../Buttons/LastFormButton.js';

const dbms = require('../../Routes/internal/DBMS.js');

const Register3 = (props) => {
  const [reminder, optIn] = useState('yes');
  const [party, setParty] = useState('independent');

  const handleSubmit = () => {
    let info = {};
    info.party = party;
    // console.log(info);
    props.setForm3(info);
    props.setReminder(reminder);
    props.close(false);
    props.setPage(0);
    props.fetchKeys();
    // setTimeout(() => {
    //   props.addUser();
    // }, 300);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <TouchableOpacity style={styles.close} onPress={() => {
            props.close(false);
            props.setPage(0)
          }}>
            <View>
              <Text style={styles.closeText}>&#x2715;</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.sectionContainer1}>
              <Text style={styles.label}>Set Election Reminders?</Text>
            <Picker placeholder="Set Reminders" selectedValue={reminder} style={styles.picker1}
              onValueChange={(itemValue, itemIndex) => optIn(itemValue)}>
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
          <View style={styles.sectionContainer2}>
          <Text style={styles.label}>Party Affiliation</Text>
            <Picker placeholder="Political Party" selectedValue={party} style={styles.picker2}
              onValueChange={(itemValue, itemIndex) => setParty(itemValue)}>
              <Picker.Item label="Indepenedent" value="Independent" />
              <Picker.Item label="Democrat" value="Democrat" />
              <Picker.Item label="Republican" value="Republican" />
              <Picker.Item label="Green Party" value="Green Party" />
              <Picker.Item label="Libertarian" value="Libertarian" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <LastButton page={props.page} last={props.setPage}/>
            <SubmitButton submit={handleSubmit}/>
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
    // marginBottom: 20,
  },
  closeText: {
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    // flex: 1,
    alignItems: 'center',
  },
  sectionContainer1: {
    marginTop: 40,
    marginBottom: 0,
    marginLeft: 25,
    // paddingHorizontal: 24,
    paddingTop: 50,
    // alignItems: 'center',
  },
  sectionContainer2: {
    marginTop: 0,
    marginBottom: 0,
    // paddingHorizontal: 24,
    paddingTop: 50,
    // alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 100,
    marginBottom: 0,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  textInput: {
    marginTop: 40,
    marginBottom: 0,
    // elevation: 6,
    // shadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    // shadowOffset: { width: 1, height: 13 },
  },
  label: {
    fontSize: 22,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.5)',
    // textShadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOpacity: 0.5,
    textAlign: 'center',
  },
  picker1: {
    // flex: 100,
    marginTop: 0,
    paddingTop: 0,
    marginLeft: 5,
    // marginBottom: 100,
    fontSize: 18,
    fontWeight: '600',
    height: 150,
    width: 200,
    color: Colors.black,
  },
  picker2: {
    // flex: 100,
    marginTop: 0,
    paddingTop: 0,
    // marginBottom: 100,
    fontSize: 18,
    fontWeight: '600',
    height: 150,
    width: 200,
    color: Colors.black,
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

export default Register3;
