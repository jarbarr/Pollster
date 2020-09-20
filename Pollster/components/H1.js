import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const H1 = (props) => {
  return (
    <>
      <View style={styles.view}>
  <Text style={styles.header}>Hello props.user.firstName!</Text>
  <Text style={styles.sectionTitle}>Are You Ready to Vote?</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  view: {
    backgroundColor: '#2EE59D',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.5,
    // textShadowRadius: 500,
    // shadowOffset: {width: 10, height: 3 },
  },
});

export default H1;