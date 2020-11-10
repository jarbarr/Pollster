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

import Form25 from './Form25.js';
import Form26 from './Form26.js';
import H13 from '../../Headers/Vote/H13.js';
import RadioButton1 from '../../Buttons/Vote/Selection Button/Form9-20/Radio1.js';
import RadioButton2 from '../../Buttons/Vote/Selection Button/Form9-20/Radio2.js';
import ReviewButton from '../../Buttons/Vote/Page Change/ReviewForm.js';
import LastButton from '../../Buttons/Vote/Page Change/LastForm.js';

const Form24 = (props) => {
  const [isPress1, setIsPress1] = useState(false);
  const [isPress2, setIsPress2] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.main}>
              <H13 />
              <View style={styles.choice}>
                <View style={styles.options}>
                  <View style={styles.measure}>
                    <Text style={styles.sectionTitle}>QQ <Text style={styles.sectionInfo}> Shall a measure amending the City of Oakland Charter to authorize the City Council, by adoption of an ordinance, to authorize persons aged 16 and above, who are otherwise eligible to vote under stat and local law, to cote for the Office of School Board Director, be adopted?</Text></Text>
                    <Text style={styles.sectionInfo}> ¿Deberá adoptarse una medida para enmendar el Estatuto de la Ciudad de Oakland para autorizar al Concejo Municipal, mediante la adopción de una ordenanza, para autorizar, que las personas mayores de 16 años, que otra manera son elegibles para votar bajo las leyes estatales y locales, voten por el Cargo de Director de la Junta Escolar?</Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio1}>
                      <RadioButton1 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm24} />
                    </View>
                    <View style={styles.radio2}>
                      <RadioButton2 isPress1={isPress1} isPress2={isPress2} setIsPress1={setIsPress1} setIsPress2={setIsPress2} setForm={props.setForm24} />
                    </View>
                  </View>
                </View>
              </View>
              <Form25 setForm25={props.setForm25}/>
              <Form26 setForm26={props.setForm26}/>
              <View style={styles.buttonContainer}>
                <LastButton page={props.page} setPage={props.setPage} />
                <ReviewButton page={props.page} setPage={props.setPage} seeBallot={props.seeBallot}/>
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
    top: 243,
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

export default Form24;
