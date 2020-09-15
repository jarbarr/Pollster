import React, { useState } from 'react';
import { Animated, View, Text, Button, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Status = () => {
  const [isPress, setIsPress] = React.useState(false);
  const touchProps = {
    style: isPress ? styles.buttonPress : styles.button,
    onPress: () => {if(isPress===false){ setIsPress(true) } else { setIsPress(false) }},
  };
  const touchProps2 = {
    style: isPress ? styles.textPress : styles.text,
  };

  return (
    <>
      <View>
        <TouchableHighlight {...touchProps}>
          {/* <Button title={'Click'} raised={true} {...touchProps} /> */}
          <Text {...touchProps2} >
            {children}
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonPress: {
    marginTop: 10,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: '#2EE59D',
    color: '#FFFFFF'
  },
  text: {
    color: '#2EE59D',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    shadowColor: 'rgba(46, 229, 157, 0.4)',
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

export default MainButton;
