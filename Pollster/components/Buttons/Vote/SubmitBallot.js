import React, { useState } from 'react';
import { Animated, View, Text, TextInput, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SubmitButton = (props) => {
  const [isPress, setIsPress] = useState(false);
  const touchProps = {
    style: isPress ? styles.buttonPress : styles.button,
    onPress: () => {
      if (props.form1 === '' || props.form2 === '' || props.form3 === '' || props.form4 === '' || props.form5 === '' || props.form6 === '' || props.form7 === '' || props.form8 === '' || props.form9 === '' || props.form10 === '' || props.form11 === '' || props.form12 === '' || props.form13 === '' || props.form14 === '' || props.form15 === '' || props.form16 === '' || props.form17 === '' || props.form18 === '' || props.form19 === '' || props.form20 === '' || props.form21 === '' || props.form22 === '' || props.form23 === '' || props.form24 === '' || props.form25 === '' || props.form26 === '') {
        Alert.alert(`${props.user.toUpperCase()} PLEASE FILL OUT EACH FORM BEFORE SUBMITTING YOUR BALLOT`)
      } else {
        props.setBallot(`${props.form1}, ${props.form2}, ${props.form3}, ${props.form4}, ${props.form5}, ${props.form6}, ${props.form7}, ${props.form8}, ${props.form9}, ${props.form10}, ${props.form11}, ${props.form12}, ${props.form13}, ${props.form14}, ${props.form15}, ${props.form16}, ${props.form17}, ${props.form18}, ${props.form19}, ${props.form20}, ${props.form21}, ${props.form22}, ${props.form23}, ${props.form24}, ${props.form25}, ${props.form26},`);
        props.generateSignature(props.ballot);
        setTimeout(()=> {
          props.home(true);
          props.goVote(false);
        }, 200);
      }
      if(isPress===false){
        setIsPress(true);
      } else {
        setIsPress(false);
      }
      setTimeout(()=> {
        setIsPress(false);
      }, 150);
    },
  };
  const touchProps2 = {
    style: isPress ? styles.textPress : styles.text,
  };

  return (
    <>
      <View style={styles.padding}>
        <TouchableHighlight {...touchProps} >
          <Text {...touchProps2} >
            Submit
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    marginTop: 30,
    // marginBottom: 20,
    paddingRight: 110,
    paddingLeft: 110,
  },
  buttonPress: {
    alignItems: "center",
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: Colors.white,
    elevation: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  button: {
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 10},
    backgroundColor: '#2EE59D',
    color: '#FFFFFF'
  },
  textPress: {
    color: '#2EE59D',
    // shadowOpacity: 3,
    elevation: 8,
    shadowRadius: 20,
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    // textShadowRadius: 30,
    // textShadowOffset: { width: 20, height: 1 },
    // textShadowColor: 'rgba(46, 229, 157, 0.4)',

  },
  text: {
    color: Colors.white,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    // shadowRadius: 20,
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',

    // fontSize: 24,
    // fontWeight: '400',
    // justifyContent: 'center',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6
  },
});

export default SubmitButton;
