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

const RadioButton7 = (props) => {
  // const [isPress, setIsPress] = useState(false);
  const select = () => {
    if (props.isPress7 === false) {
      props.setIsPress7(true);
    } else {
      props.setIsPress7(false);
    }
  };

  return (
    <>
      <View style={styles.padding}>
        {/* <TouchableOpacity> */}
          <TouchableOpacity style={styles.button} onPress={(e) => {
            props.setIsPress1(false);
            props.setIsPress2(false);
            props.setIsPress3(false);
            props.setIsPress4(false);
            props.setIsPress5(false);
            props.setIsPress6(false);
            props.setIsPress7(!props.isPress7);
            props.setForm1(props.write)
            }}/>
            {props.isPress7 ? <TouchableOpacity style={styles.buttonPress}/> : null}
        {/* </TouchableOpacity>¸ */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 4,
    position: 'absolute',
    right: 15,
    top: 1,
    marginRight: 5,
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
    // position: 'absolute',
    // right: 5,
    // top: 8,
    // flexDirection: 'row',
  },
});

export default RadioButton7;
