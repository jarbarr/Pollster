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

import H6 from '../../Headers/Vote/H6.js';
import RadioButton1 from '../../Buttons/Vote/Selection Button/Form5/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form5/Radio2.js';
import RadioButton3 from '../../Buttons/Vote/Selection Button/Form5/Radio3.js';
import NextButton from '../../Buttons/Vote/Page Change/NextForm.js';
import LastButton from '../../Buttons/Vote/Page Change/LastForm.js';

// import NextButton from '../../Buttons/Vote/NextForm.js';

const Form5 = (props) => {
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
              <H6 />
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>MARK FICKES</Text>
                  <RadioButton1 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setForm5={props.setForm5} />
                </View>
                <Text style={styles.sectionSubTitle}>Civil Rights Attorney</Text>
                <Text style={styles.sectionSubTitle}>Abogado de Derechos Civiles</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>ELENA CONDES</Text>
                  <RadioButton2 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setForm5={props.setForm5} />
                </View>
                <Text style={styles.sectionSubTitle}>Trial Attorney</Text>
                <Text style={styles.sectionSubTitle}>Abogada Litigana</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <TouchableOpacity>
                    <TextInput style={styles.textInput} onChangeText={text => writeIn(text)} value={write} keyboardType={'default'} maxLength={30} autoCapitalize={'characters'}></TextInput>
                  </TouchableOpacity>
                  </View>
                  <Text style={styles.sectionSubTitle}>Write-in {'\n'}Por Escrito</Text>
                  <RadioButton3 write={write} isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setForm5={props.setForm5} />
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
    marginTop: 55,
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
    paddingBottom: 50,
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

export default Form5;