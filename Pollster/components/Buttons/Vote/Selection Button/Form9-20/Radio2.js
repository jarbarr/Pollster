import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RadioButton2 = (props) => {
  const select = () => {
    if (props.isPress2 === false) {
      props.setIsPress2(true);
    } else {
      props.setIsPress2(false);
    }
  };

  return (
    <>
      <View style={styles.padding}>
        {/* <TouchableOpacity> */}
        <Text style={styles.choice}>NO / NO</Text>
          <TouchableOpacity style={styles.button} onPress={(e) => {
            props.setIsPress1(false);
            props.setIsPress2(!props.isPress2);
            props.setForm('NO / NO')
            }}/>
            {props.isPress2 ? <TouchableOpacity style={styles.buttonPress}/> : null}
        {/* </TouchableOpacity>¸ */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    zIndex: 4,
    // position: 'absolute',
    // right: 10,
    // top: 300,
    // marginTop: 5,
  },
  buttonPress: {
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#2EE59D',
    borderWidth: 3,
    padding: 4,
    backgroundColor: '#2EE59D',
    elevation: 6,
    zIndex: 5,
    position: 'absolute',
    right: 4.8,
    top: 5,
  },
  choice: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#2EE59D',
    borderWidth: 2,
    padding: 10,
    backgroundColor: Colors.White,
    elevation: 6,
    zIndex: 8,
    marginLeft: 20,
    // position: 'absolute',
    // right: 5,
    // top: 8,
    // flexDirection: 'row',
  },
});

export default RadioButton2;
