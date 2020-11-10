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

const Form26 = (props) => {
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
                  <Text style={styles.sectionTitle}>S1 <Text style={styles.sectionInfo}> "Shall Oakland's City Charter be amended to: (1) create an Office of Inspector General to review and report on the Police Department's and the Community Police Review Agency's ("CPRA's") practices regarding police misconduct, and allow the Police Commission ("Commission") to hire and remove the inspector General; and (2) change the Commission's and the CPRA's powers and duties, and allow the Commission and the CPRA to hire their own attorneys independent of the City Attorney?"</Text></Text>
                  <Text style={styles.sectionInfo}> "¿Deberá enmendarse el Estatuto de la Ciudad de Oakland para: (1) crear un Cargo de Inspector General para revisar e informar sobre las pácticas del Departamento de Policía y la Agencia Comunitaria de Revisión de la Policía ("CPRA's") en relación con la mala conducta de la policía, y permitir que la Comisión de Policía ("Comisión") contrate y despida al Inspector General; y (2) cambiar los poederes y obligaciones de la Comisión y la CPRA's, y permitir que la Comisión y la CPRA contraten a sus propios abogados independientes del Abogado Municipal?"</Text>
                </View>
                <View style={styles.radioContainer}>
                  <View style={styles.radio1}>
                    <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm26} />
                  </View>
                  <View style={styles.radio2}>
                    <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm26} />
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
    top: 373,
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

export default Form26;
