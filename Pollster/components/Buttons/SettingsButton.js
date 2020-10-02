import React, { useState } from 'react';
import { Animated, View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SettingsButton = (props) => {
  const [isPress, setIsPress] = React.useState(false)
  const touchProps = {
    style: isPress ? styles.buttonPress : styles.button,
    onPress: () => {
      if(isPress===false){
        setIsPress(true);
       } else {
         setIsPress(false);
      }
      setTimeout(()=> {
        setIsPress(false);
      }, 500);
    },
  };
  const touchProps2 = {
    style: isPress ? styles.textPress : styles.text,
  };

  return (
    <>
      <View style={styles.padding}>
        <TouchableHighlight {...touchProps}>
          <Text {...touchProps2} >
            Settings
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

export default SettingsButton;
