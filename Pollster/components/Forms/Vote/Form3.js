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

import H4 from '../../Headers/Vote/H4.js';
import RadioButton1 from '../../Buttons/Vote/Selection Button/Form3/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form3/Radio2.js';
import NextButton from '../../Buttons/Vote/Page Change/NextForm.js';
import LastButton from '../../Buttons/Vote/Page Change/LastForm.js';

// import NextButton from '../../Buttons/Vote/NextForm.js';

const Form3 = (props) => {
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
              <H4 />
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>JAMIE DLUZAK</Text>
                  <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm3={props.setForm3} />
                </View>
                <Text style={styles.sectionSubTitle}>Party Preference: Libertarian</Text>
                <Text style={styles.sectionSubTitle}>Preferencia de Partido: Libertario</Text>
                <Text style={styles.sectionSubTitle}>Book Publisher</Text>
                <Text style={styles.sectionSubTitle}>Editor de Libros</Text>
              </View>
              <View style={styles.choice}>
                <View style={styles.options}>
                  <Text style={styles.sectionTitle}>NANCY SKINNER</Text>
                  <RadioButton2 isPress1={isPress1} isPress2={isPress2}  setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm3={props.setForm3} />
                </View>
                <Text style={styles.sectionSubTitle}>Party Preference: Democratic</Text>
                <Text style={styles.sectionSubTitle}>Preferencia de Partido: Demócrata</Text>
                <Text style={styles.sectionSubTitle}>State Senator, 9th District</Text>
                <Text style={styles.sectionSubTitle}>Senadora Estatal, Distrito 9</Text>
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
    // marginBottom: 20,
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
    // textAlign: 'center',
    // alignItems: 'center',
  },
  sectionSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black,
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Form3;
