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

import H2 from '../../Headers/Vote/H2.js';
import RadioButton1 from '../../Buttons/Vote/Selection Button/Form1/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form1/Radio2.js';
import RadioButton3 from '../../Buttons/Vote/Selection Button/Form1/Radio3.js';
import RadioButton4 from '../../Buttons/Vote/Selection Button/Form1/Radio4.js';
import RadioButton5 from '../../Buttons/Vote/Selection Button/Form1/Radio5.js';
import RadioButton6 from '../../Buttons/Vote/Selection Button/Form1/Radio6.js';
import RadioButton7 from '../../Buttons/Vote/Selection Button/Form1/Radio7.js';
import NextButton from '../../Buttons/Vote/Page Change/NextForm.js';

const Form1 = (props) => {
  // const [option, choose] = useState(false);
  const [write, writeIn] = useState('');
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);
  const [isPress3, setIsPress3] = useState(false);
  const [isPress4, setIsPress4] = useState(false);
  const [isPress5, setIsPress5] = useState(false);
  const [isPress6, setIsPress6] = useState(false);
  const [isPress7, setIsPress7] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
              <H2 />
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>JO JORGENSEN</Text>
                  <RadioButton1 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} isPress4={isPress4} isPress5={isPress5} isPress6={isPress6} isPress7={isPress7} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setIsPress4={setIsPress4} setIsPress5={setIsPress5} setIsPress6={setIsPress6} setIsPress7={setIsPress7} setForm1={props.setForm1} />
                </View>
                <Text style={styles.sectionSubTitle}>for President /</Text>
                <Text style={styles.sectionSubTitle}>para Presidente</Text>
                <Text style={styles.party}>Libertarian</Text>
                <Text style={styles.party}>Libertario</Text>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>JEREMY "SPIKE" COHEN</Text>
                </View>
                <Text style={styles.sectionSubTitle}>for Vice President /</Text>
                <Text style={styles.sectionSubTitle}>para Vicepresidente</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>JOSEPH R. BIDEN</Text>
                  <RadioButton2 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} isPress4={isPress4} isPress5={isPress5} isPress6={isPress6} isPress7={isPress7} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setIsPress4={setIsPress4} setIsPress5={setIsPress5} setIsPress6={setIsPress6} setIsPress7={setIsPress7} setForm1={props.setForm1} />
                </View>
                <Text style={styles.sectionSubTitle}>for President /</Text>
                <Text style={styles.sectionSubTitle}>para Presidente</Text>
                <Text style={styles.party}>Democrat</Text>
                <Text style={styles.party}>Demócrata</Text>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>KAMALA D. HARRIS</Text>
                </View>
                <Text style={styles.sectionSubTitle}>for Vice President /</Text>
                <Text style={styles.sectionSubTitle}>para Vicepresidente</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>DONALD J. TRUMP</Text>
                  <RadioButton3 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} isPress4={isPress4} isPress5={isPress5} isPress6={isPress6} isPress7={isPress7} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setIsPress4={setIsPress4} setIsPress5={setIsPress5} setIsPress6={setIsPress6} setIsPress7={setIsPress7} setForm1={props.setForm1} />
                </View>
                <Text style={styles.sectionSubTitle}>for President /</Text>
                <Text style={styles.sectionSubTitle}>para Presidente</Text>
                <Text style={styles.party}>Republican</Text>
                <Text style={styles.party}>Republicano</Text>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>MICHAEL R. PENCE</Text>
                </View>
                <Text style={styles.sectionSubTitle}>for Vice President /</Text>
                <Text style={styles.sectionSubTitle}>para Vicepresidente</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>GLORIA LA RIVA</Text>
                  <RadioButton4 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} isPress4={isPress4} isPress5={isPress5} isPress6={isPress6} isPress7={isPress7} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setIsPress4={setIsPress4} setIsPress5={setIsPress5} setIsPress6={setIsPress6} setIsPress7={setIsPress7} setForm1={props.setForm1} />
                </View>
                <Text style={styles.sectionSubTitle}>for President /</Text>
                <Text style={styles.sectionSubTitle}>para Presidente</Text>
                <Text style={styles.party}>Peace And Freedom</Text>
                <Text style={styles.party}>Paz y Libertad</Text>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>SUNIL FREEMAN</Text>
                </View>
                <Text style={styles.sectionSubTitle}>for Vice President /</Text>
                <Text style={styles.sectionSubTitle}>para Vicepresidente</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>ROQUE "ROCKY" DE LA {'\n'}FUENTE GUERRA</Text>
                  <RadioButton5 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} isPress4={isPress4} isPress5={isPress5} isPress6={isPress6} isPress7={isPress7} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setIsPress4={setIsPress4} setIsPress5={setIsPress5} setIsPress6={setIsPress6} setIsPress7={setIsPress7} setForm1={props.setForm1} />
                </View>
                <Text style={styles.sectionSubTitle}>for President /</Text>
                <Text style={styles.sectionSubTitle}>para Presidente</Text>
                <Text style={styles.party}>Independent</Text>
                <Text style={styles.party}>Independiente</Text>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>KANYE OMARI WEST</Text>
                </View>
                <Text style={styles.sectionSubTitle}>for Vice President /</Text>
                <Text style={styles.sectionSubTitle}>para Vicepresidente</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>HOWIE HAWKINS</Text>
                  <RadioButton6 isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} isPress4={isPress4} isPress5={isPress5} isPress6={isPress6} isPress7={isPress7} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setIsPress4={setIsPress4} setIsPress5={setIsPress5} setIsPress6={setIsPress6} setIsPress7={setIsPress7} setForm1={props.setForm1} />
                </View>
                <Text style={styles.sectionSubTitle}>for President /</Text>
                <Text style={styles.sectionSubTitle}>para Presidente</Text>
                <Text style={styles.party}>Green</Text>
                <Text style={styles.party}>Verde</Text>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>ANGELA NICOLE WALKER</Text>
                </View>
                <Text style={styles.sectionSubTitle}>for Vice President /</Text>
                <Text style={styles.sectionSubTitle}>para Vicepresidente</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <TouchableOpacity>
                    <TextInput style={styles.textInput} onChangeText={text => writeIn(text)} value={write} keyboardType={'default'} maxLength={30} autoCapitalize={'characters'}></TextInput>
                  </TouchableOpacity>
                  </View>
                  <Text style={styles.sectionSubTitle}>Write-in {'\n'}Por Escrito</Text>
                  <RadioButton7 write={write} isPress1={isPress1} isPress2={isPress2} isPress3={isPress3} isPress4={isPress4} isPress5={isPress5} isPress6={isPress6} isPress7={isPress7} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setIsPress3={setIsPress3} setIsPress4={setIsPress4} setIsPress5={setIsPress5} setIsPress6={setIsPress6} setIsPress7={setIsPress7} setForm1={props.setForm1} />
              </View>
              <View style={styles.buttonContainer}>
                <NextButton form={props.form1} page={props.page} setPage={props.setPage} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
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
  party: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 5,
  },
  sectionSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black,
    marginLeft: 10,
  },
  options: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    // marginLeft: 10,
    // justifyContent: 'center',
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 55,
    // marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 10,
    // textAlign: 'center',
    // alignItems: 'center',
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
});

export default Form1;
