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

import H12 from '../../Headers/Vote/H12.js';
import RadioButton1 from '../../Buttons/Vote/Selection Button/Form9-20/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form9-20/Radio2.js';
import NextButton from '../../Buttons/Vote/Page Change/NextForm.js';
import LastButton from '../../Buttons/Vote/Page Change/LastForm.js';

const Form23 = (props) => {
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
              <H12 />
              <View style={styles.choice}>
                <View style={styles.options}>
                  <View style={styles.measure}>
                    <Text style={styles.sectionTitle}>Y <Text style={styles.sectionInfo}> Shall Oakland Unified School District's measure to issue $735 million in bonds for: classroom repair and school safety improvements including upgrading classrooms, science labs, and technology; improving student safety and security; repairing bathrooms, electrical systems, and plumbing/sewers; and improving energy efficiency/earthquake safety; at legal rates, levying about $60 per $100,000 of assessed value, raising an average of $48.5 million annually for approximately 30 years, with citizens' oversight, audits, and no money for administrator salaries be adopted?</Text></Text>
                    <Text style={styles.sectionInfo}> ¿Deberá la medida del Distrito Escolar Unificado de Oakland emitir bonos por $735 millones para: la reparación de salones de clase y mejoras en la seguridad de las escuelas que incluyan la majora de salones de clase, laboratorios de ciencias, y tecnologia; la mejora de la seguridad y protección de los estudiantes; la reparación de baños, sistemas eléctricos, y plomería/alcantarillas; y la mejora de la eficiencia energética/seguridad en caso de terremotos; a tarifas legales, gravando cerca de $60 por cada $100,000 de valor fiscal, recaudando un promedio de $48.5 millones anuales durante aproximadamente 30 años, con supervisión ciudadana, auditorías, y sin dinero para los salarios del administrador?</Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio1}>
                      <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm23} />
                    </View>
                    <View style={styles.radio2}>
                      <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm23} />
                    </View>
                  </View>
                </View>
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
    top: 442,
    right: -4,
    marginLeft: 20,
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
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Form23;
