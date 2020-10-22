import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  TextInput,
  Linking,
  StyleSheet,
} from 'react-native';
import { Colors,} from 'react-native/Libraries/NewAppScreen';

import Login from '../../Login.js';

const LoginModal = (props) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
        }}>
        <View style={styles.centeredView}>
          <View style={styles.regView}>
            <Login findUser={props.findUser} setLogin={props.setLogin} />
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  regView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50
  },
})

export default LoginModal;