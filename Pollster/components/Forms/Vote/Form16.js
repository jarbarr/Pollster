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

const Form16 = (props) => {
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
                    <Text style={styles.sectionTitle}>21 <Text style={styles.sectionSubTitle}>  EXPANDS LOCAL GOVERNMENTS' AUTHORITY TO ENACT RENT CONTROL ON RESIDENTIAL PROPERTY. INITIATIVE STATUTE. <Text style={styles.sectionInfo}> Allows local governments to establish rent control on residential properties over 15 years old. Local limits on rate increases may differ from statewide limit. Fiscal Impact: Overall, a potential reduction in state and local revenues in the high tens of millions of dollars per year over time. Depending on actions by local communities, revenue losses could be less or more. </Text></Text></Text>
                    <Text style={styles.sectionSubTitle}>AMPLÍA LA AUTORIDAD DE LOS GOBIERNOS LOCALES PARA PROMULGAR EL CONTROL DE ALQUIERES EN PROPIEDADES RESIDENCIALES. LEY POR INCIATIVA. <Text style={styles.sectionInfo}> Permite que los gobiernos locales establezcan el control de alquileres en propiedades residenciales de más de 15 años. Los límites locales en los aumentos de tarifas pueden diferir del límite estatal. Impacto fiscal: En general, una posible reducción de los ingresos estatales ye locales en muchas decenas de millones de dólares por año a lo largo del tiempo. Dependiendo de las acciones que tomen las comunidades locales, la pérdida de ingresos podría ser menor o mayor.</Text></Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio1}>
                      <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm16} />
                    </View>
                    <View style={styles.radio2}>
                      <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm16} />
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
    top: 458,
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

export default Form16;
