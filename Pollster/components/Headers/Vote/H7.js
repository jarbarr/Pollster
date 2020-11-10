import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const H7 = () => {
  return (
    <>
      <View style={styles.view}>
        <View style={styles.delimiter}>
          <Text style={styles.h1}>NONPARTISAN OFFICES / </Text>
          <Text style={styles.h1}>CARGOS NO PARTIDARIOS</Text>
        </View>
          <Text style={styles.h1}>SCHOOL</Text>
          <Text style={styles.h1}>ESCUELA</Text>
        <View style={styles.subHeader}>
          <Text style={styles.h2}>PERALTA COMMUNITY COLLEGE DISTRICT TRUSTEE, AREA 1</Text>
          <Text style={styles.h2}>FIDEICOMISARIO DEL DISTRITO DE COLEGIOS COMUNITARIOS DE PERALTA, ÁREA 1</Text>
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
    textShadowOffset: { width: 1, height: 2 },
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
    backgroundColor: '#2EE59D',
    marginBottom: 40,
    paddingTop: 20,
    borderRadius: 10,
    shadowColor: 'rgba(46, 229, 157, 0.3)',
    shadowOpacity: 1.5,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: { width: 5, height: 1 },
  },
  delimiter: {
    marginBottom: 15,
    borderBottomColor: Colors.white,
    borderBottomWidth: 2,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default H7;