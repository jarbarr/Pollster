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

import Form10 from './Form10.js';
import Form11 from './Form11.js';
import Form12 from './Form12.js';
import Form13 from './Form13.js';
import Form14 from './Form14.js';
import Form15 from './Form15.js';
import Form16 from './Form16.js';
import Form17 from './Form17.js';
import Form18 from './Form18.js';
import Form19 from './Form19.js';
import Form20 from './Form20.js';
import H10 from '../../Headers/Vote/H10.js';
import RadioButton1 from '../../Buttons/Vote/Selection Button/Form9-20/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form9-20/Radio2.js';
import NextButton from '../../Buttons/Vote/Page Change/NextForm.js';
import LastButton from '../../Buttons/Vote/Page Change/LastForm.js';

const Form9 = (props) => {
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
              <H10 />
              <View style={styles.choice}>
                <View style={styles.options}>
                  <View style={styles.measure}>
                    <Text style={styles.sectionTitle}>14 <Text style={styles.sectionSubTitle}>  AUTHORIZES BONDS CONTINUING STEM CELL RESEARCH. INTITIATIVE STATUTE. <Text style={styles.sectionInfo}> Authorizes $5.5 billion state bonds for: stem cell and other medical research, including training; research facility construction; administrative costs. Dedicates $1.5 billion to brain-related diseases. Appropriates General Fund moneys for replayment. Expands related programs. Fiscal Impact: Increased state costs to repay bonds estimated at about $260 million per year over the next roughly 30 years.</Text></Text></Text>
                    <Text style={styles.sectionSubTitle}>AUTORIZA BONOS PARA CONTINUAR LA INVESTIGACIÓN CON CÉLULAS MADRE. LEY POR INICIATIVA. <Text style={styles.sectionInfo}> Autoriza $5.5 mil millones en bonos estatales para: investigación con células madre ye otras investigaciones médicas, incluyendo capacitación; construcción de instalaciones de investigación; y costos administrativos. Destina $1.5 mil millones a enfermedades relacionadas con el cerebro. Asigna dinero del Fondo General para reembolso. Amplía programas relacionados. Impacto fiscal: Se calcula que el aumento de los costos del estado para reembolsar los bonos es de alrededor de $260 millones por año durante aproximadamente los próximos 30 años.</Text></Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio1}>
                      <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm9} />
                    </View>
                    <View style={styles.radio2}>
                      <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm9} />
                    </View>
                  </View>
                </View>
              </View>
              <Form10 setForm10={props.setForm10}/>
              <Form11 setForm11={props.setForm11}/>
              <Form12 setForm12={props.setForm12}/>
              <Form13 setForm13={props.setForm13}/>
              <Form14 setForm14={props.setForm14}/>
              <Form15 setForm15={props.setForm15}/>
              <Form16 setForm16={props.setForm16}/>
              <Form17 setForm17={props.setForm17}/>
              <Form18 setForm18={props.setForm18}/>
              <Form19 setForm19={props.setForm19}/>
              <Form20 setForm20={props.setForm20}/>
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
    // marginLeft: 10,
  },
  radioContainer: {
    position: 'absolute',
    top: 426,
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

export default Form9;
