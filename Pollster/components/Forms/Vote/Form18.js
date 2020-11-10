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

const Form18 = (props) => {
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
                    <Text style={styles.sectionTitle}>23 <Text style={styles.sectionSubTitle}>  ESTABLISHES STATE REQUIREMENTS FOR KIDNEY DIALYSIS CLINICS. REQUIRES ON-SITE MEDICAL PROFESSIONAL. INITIATIVE STATUTE. <Text style={styles.sectionInfo}> Requires physician, nurse practitioner or physician assistant on site during dialysis treatment. Prohibits clinics from reducing services without state approval. Prohibits clinics from refusing to treat patients based on payment source. Fiscal Impact: Increased state and local government costs likely in the low tens of millions of dollars annually. </Text></Text></Text>
                    <Text style={styles.sectionSubTitle}>ESTABLECE REQUISITOS DEL ESTADO PARA LAS CLÍNICAS DE DIÁLISIS RENAL. REQUIERE PERSONAL MÉDICO PROFESIONAL PRESENTE EN EL SITIO. LEY POR INICIATIVA. <Text style={styles.sectionInfo}> Exige que un médico, enfermero practicante o asistente médico esté presente en sitio durante el tratamiento de díalisis. Prohíbe que las clínicas reduzcan los servicios sin la aprobación del estado. Prohíbe que las clínicas se nieguen a tratar a los pacientes basándose en la fuente de pago. Impacto fiscal: Aumento de los costos del gobierno estatal y local, probablemente de algunas decenas de millones de dólares anuales.</Text></Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio1}>
                      <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm18} />
                    </View>
                    <View style={styles.radio2}>
                      <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm18} />
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
    top: 443,
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

export default Form18;
