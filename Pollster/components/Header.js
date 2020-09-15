import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const Header = () => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.header}>Welcome To Pollster</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 64,
    fontWeight: '900',
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  view: {
    backgroundColor: '#2EE59D',
  }
});

export default Header;