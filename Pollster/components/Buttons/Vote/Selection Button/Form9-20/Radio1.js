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

const RadioButton1 = (props) => {
  // const [isPress, setIsPress] = useState(false);
  const select = () => {
    if (props.isPress1 === false) {
      props.setIsPress1(true);
    } else {
      props.setIsPress1(false);
    }
  };

  return (
    <>
      <View style={styles.padding}>
        {/* <TouchableOpacity> */}
        <Text style={styles.choice}>YES / SI</Text>
          <TouchableOpacity style={styles.button} onPress={(e) => {
            props.setIsPress1(!props.isPress1);
            props.setIsPress2(false);
            props.setForm('YES / SI')
            }}/>
            {props.isPress1 ? <TouchableOpacity style={styles.buttonPress}/> : null}
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
    // top: 250,
    // marginLeft: 10,
  },
  choice: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '600',
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

export default RadioButton1;
