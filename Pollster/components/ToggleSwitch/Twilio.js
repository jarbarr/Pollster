import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Switch
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import LocalElectionsList from '../LocalElectionsList.js';

const TwilioSwitch = (props) => {
  const [notifications, setNotificiations] = useState(true);
  const toggleSwitch = () => {
    setNotificiations(previousState => !previousState);
    props.setTwilio(previousState => !previousState)
  };
  return (
    <>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: "rgba(0, 0, 0, .75)", true: "#2EE59D" }}
          thumbColor={'rgb(0, 0, 0'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={notifications} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  switch: {
    alignItems: 'center',
    padding: 20,
  },
});

export default TwilioSwitch;