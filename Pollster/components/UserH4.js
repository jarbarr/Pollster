import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const UserH4 = () => {
  return (
    <>
      <View style={styles.view}>
        {/* <Text style={styles.h1}>Pollster</Text> */}
        <Text style={styles.h2}>Vote</Text>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 54,
    fontWeight: '800',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
    shadowRadius: 30,

  },
  view: {
    // marginTop: 20,
    backgroundColor: '#2EE59D',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 20,
    shadowRadius: 30,
    shadowOffset: { width: 1, height: 20 },

  }
});

export default UserH4;