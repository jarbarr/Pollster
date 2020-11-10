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

import H9 from '../../Headers/Vote/H9.js';
import RadioButton1 from '../../Buttons/Vote/Selection Button/Form8/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form8/Radio2.js';
import RadioButton3 from '../../Buttons/Vote/Selection Button/Form8/Radio3.js';
import NextButton from '../../Buttons/Vote/Page Change/NextForm.js';
import LastButton from '../../Buttons/Vote/Page Change/LastForm.js';

// import NextButton from '../../Buttons/Vote/NextForm.js';

const Form8 = (props) => {
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);
  const [isPress3, setIsPress3] = useState(false);
  const [write, writeIn] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
              <H9 />
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>GREG HARPER</Text>
                  <RadioButton1 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setForm8={props.setForm8} />
                </View>
                <Text style={styles.sectionSubTitle}>Business Attorney</Text>
                <Text style={styles.sectionSubTitle}>Abogado Empresarial</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>JEAN WALSH</Text>
                  <RadioButton2 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setForm8={props.setForm8} />
                </View>
                <Text style={styles.sectionSubTitle}>Sustainable Transportation{'\n'}Professional</Text>
                <Text style={styles.sectionSubTitle}>Profesional de Transporte{'\n'}Sostenible</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <TouchableOpacity>
                    <TextInput style={styles.textInput} onChangeText={text => writeIn(text)} value={write} keyboardType={'default'} maxLength={30} autoCapitalize={'characters'}></TextInput>
                  </TouchableOpacity>
                  </View>
                  <Text style={styles.sectionSubTitle}>Write-in {'\n'}Por Escrito</Text>
                  <RadioButton3 write={write} isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setForm8={props.setForm8} />
              </View>
              <View style={styles.buttonContainer}>
                <LastButton page={props.page} setPage={props.setPage} />
                <NextButton page={props.page} setPage={props.setPage} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  sectionContainer: {
    alignItems: 'center',
  },
  main: {
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 30,
    shadowOpacity: 4,
    backgroundColor: Colors.white,
    elevation: 20,
    shadowOffset: { width: 1, height: 20 },
    paddingBottom: 80,
  },
  choice: {
    marginBottom: 30,
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  options: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 10,
    // textAlign: 'center',
    // alignItems: 'center',
  },
  sectionSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black,
    marginLeft: 10,
  },
  textInput: {
    marginBottom: 5,
    padding: 15,
    width: 180,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    backgroundColor: Colors.white,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Form8;
