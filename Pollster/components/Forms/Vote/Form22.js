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

import RadioButton1 from '../../Buttons/Vote/Selection Button/Form9-20/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form9-20/Radio2.js';

const Form22 = (props) => {
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <View style={styles.choice}>
              <View style={styles.options}>
                <View style={styles.measure}>
                  <Text style={styles.sectionTitle}>W <Text style={styles.sectionInfo}> Shall a County of Alameda ordinance be adopted to establish a half percent sales tax for 10 years, to provide essential County services, including housing and services for those experiencing homelessness, mental health services, job training, social safety net and other general fund services, providing approximately $150,000,000 annually, with annual audits and citizen oversight?</Text></Text>
                  <Text style={styles.sectionInfo}> ¿Deberá adoptarse una ordenanza en el Condado de Alameda para establecer un impuesto sobre ventas de medio por ciento durante 10 años, para proporionar servicios esenciales del Condado, incluida la vivienda y los servicios para las personas que se encuentran sin hogar, servicios de salud mental, formación laboral, red de protección social y otros servicios de fondos generales, lo que proporcionaría aproximadamente $150,000,000 anuales, con auditorias anuales y supervisión ciudana?</Text>
                </View>
                <View style={styles.radioContainer}>
                  <View style={styles.radio1}>
                    <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm22} />
                  </View>
                  <View style={styles.radio2}>
                    <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm22} />
                  </View>
                </View>
              </View>
            </View>
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
    marginTop: 20,
    alignItems: 'center',
  },
  choice: {
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  options: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    paddingBottom: 80,
  },
  measure: {
    display: 'flex',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.black,
    // marginLeft: 5,
    // marginRight: 10,
  },
  sectionSubTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 10,
  },
  sectionInfo: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black,
    marginTop: 10,
  },
  radioContainer: {
    position: 'absolute',
    top: 328,
    right: -4,
    marginLeft: 50,
  },
  radio1: {
    borderColor: 'rgba(0,0,0,.3)',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 1,
    paddingLeft: 120,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // marginTop: 10,
  },
  radio2: {
    borderColor: 'rgba(0,0,0,.3)',
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 1,
    paddingLeft: 120,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // marginTop: 10,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default Form22;
