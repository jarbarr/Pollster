import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const H9 = () => {
  return (
    <>
      <View style={styles.view}>
        <View style={styles.subHeader}>
          <Text style={styles.h2}>AC TRANSIT DISTRICT DIRECTOR, WARD 2</Text>
          <Text style={styles.h2}>DIRECTOR DEL DISTRITO DE AC TRANSIT, DISTRITO ELECTORAL 2</Text>
          <View style={styles.subTitle}>
            <Text style={styles.h3}>Vote for One / Vote por Uno</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#d2f9e9'

  },
  subHeader: {
    backgroundColor: '#bbf7df'
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -5, height: 2 },
    textShadowRadius: 6,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: { width: 1, height: 2 },
    // textShadowRadius: 6,
    marginTop: 10,
    marginBottom: 10,
  },
  h3: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
    justifyContent: 'center',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: { width: 1, height: 2 },
    // textShadowRadius: 6,
  },
  view: {
    // marginTop: 20,
    // backgroundColor: '#2EE59D',
    marginBottom: 40,
    // paddingTop: 20,
    borderRadius: 10,
    shadowColor: 'rgba(46, 229, 157, 0.3)',
    shadowOpacity: 1.5,
    elevation: 20,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 2 },
  },
  delimiter: {
    marginBottom: 15,
    borderBottomColor: Colors.white,
    borderBottomWidth: 2,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default H9;