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

const Form20 = (props) => {
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
                    <Text style={styles.sectionTitle}>25 <Text style={styles.sectionSubTitle}>  REFERENDUM ON LAW THAT REPLACED MONEY BAIL WITH SYSTEM BASED ON PUBLIC SAFETY AND FLIGHT RISK. <Text style={styles.sectionInfo}> A "Yes" cote approves, and a "No" vote rejects, law replacing money bail with system based on public safety and flight risk. Fiscal Impact: Increased costs possibly in mid hundreds of millions of dollars annually for a new process for release from jail prior to trial. Decreased county jail costs, possibly in high tens of millions of dollars annually. </Text></Text></Text>
                    <Text style={styles.sectionSubTitle}>REFERÉNDUM SOBRE LA LEY QUE REEMPLAZA LA FIANZA DE DINERO CON UN SISTEMA BASADO EN LA SEGURIDAD PÚBLICA Y EL RIESGO DE FUGA. <Text style={styles.sectionInfo}> Un voto "Si" aprueba, y un voto "No" rechaza, la ley que reemplaza la fianza de dinero con un sistema basado en la seguridad públia y el riesgo de fuga. Impacto fiscal: Aumento de los costos posiblemente en el rango medio de cientos de millones de dólares anuales para un nuevo proceso de liberación de la cárcel antes de juicio. Disminución en los costos de las cárceles del condado, posiblemente de muchas decenas de millones de dólares anuales.</Text></Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio1}>
                      <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm20} />
                    </View>
                    <View style={styles.radio2}>
                      <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm20} />
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
    top: 428,
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

export default Form20;
