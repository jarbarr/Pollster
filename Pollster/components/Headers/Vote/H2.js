import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const H2 = () => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.h1}>PARTY-NOMINATED OFFICES / CARGOS NOMINADOS POR LOS PARTIDOS</Text>
        <Text style={styles.h1}>PRESIDENT OF THE UNITED STATES / PRSIDENTE DE LOS ESTADOS UNIDOS</Text>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  view: {
    // marginTop: 20,
    backgroundColor: '#2EE59D',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 20 },
  }
});

export default H2;