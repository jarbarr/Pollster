import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const H1 = (props) => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.h1}>{props.user.firstName}</Text>
        <Text style={styles.h2}>Review your Ballot Before Submission</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    shadowOpacity: 0.5,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    shadowOpacity: 0.5,
  },
  view: {
    backgroundColor: '#2EE59D',
    padding: 20,
    // marginBottom: 100,
  },
});

export default H1;