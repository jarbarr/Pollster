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

const Form19 = (props) => {
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
                    <Text style={styles.sectionTitle}>24 <Text style={styles.sectionSubTitle}>  AMENDS CONSUMER PRIVACY LAWS. INITIATIVE STATUTE. <Text style={styles.sectionInfo}> Permits consumers to: prevent businesses from sharing personal information, correct inaccurate personal information, and limit businesses' use of "sensitive personal information," including precise geolocation, race, ethnicity, and health information. Establishes California Privacy Protection Agency. Fiscal Impact: Increased annual state costs of at least $10 million, but unlikely exceeding low tens of millions of dollars, to enforce expanded consumer privacy laws. Some costs would be offset by penalties for violating these laws. </Text></Text></Text>
                    <Text style={styles.sectionSubTitle}>ENMIENDA LAS LEYES DE PRIVACIDAD DEL CONSUMIDOR. LEY POR INICIATIVA. <Text style={styles.sectionInfo}> Permite a los consumidores: evitar que los negocios compartan información personal, corregir información personal incorrecta y limitar el uso de la "información personal sensible" por parte de los negocios, incluyendo la información de geolocalización exacta, raza, origen étnico e información de salud. Establece la Agencia de Protección de Privacidad de California. Impacto fiscal: Aumento de los costos estatales anuales de al menos $10 millones, pero poco probable que superen algunas decenas de millones de dólares, para hacer cumplir las leyes de privacidad del consumidor extendidas. Algunos costos se compensarían con multas por violar estas leyes.</Text></Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio1}>
                      <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm19} />
                    </View>
                    <View style={styles.radio2}>
                      <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm19} />
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
    paddingBottom: 90,
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
    // marginLeft: 10,
  },
  radioContainer: {
    position: 'absolute',
    top: 503,
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
});

export default Form19;
