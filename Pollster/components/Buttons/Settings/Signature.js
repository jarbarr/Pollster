import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SignatureButton = (props) => {
  const [isPress, setIsPress] = React.useState(false);
  const touchProps = {
    style: isPress ? styles.buttonPress : styles.button,
    onPress: () => {
      if(isPress===false){
        props.seeSignature(true);
        setIsPress(true);
      } else {
        setIsPress(false);
      }
      setTimeout(()=> {
        setIsPress(false)
      }, 500);
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
            Signature
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    marginTop: 10,
    paddingRight: 90,
    paddingLeft: 90,
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: Colors.white,
    elevation: 6,
    shadowColor: 'rgba(0, 0, 0, .5)',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 10 },
  },
  buttonPress: {
    marginTop: 10,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 20,
    shadowRadius: 30,
    shadowOffset: { width: 1, height: 20 },
    backgroundColor: '#2EE59D',
    color: '#FFFFFF'
  },
  text: {
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
  textPress: {
    color: Colors.white,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignatureButton;
