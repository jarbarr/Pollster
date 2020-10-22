import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  TextInput,
  Linking,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const PrivKeyModal = (props) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.privKey}
        onRequestClose={() => {
        }}>
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.regView}>
            <TouchableOpacity style={styles.close} onPress={() => {
              props.seePrivKey(false);
            }}>
              <View>
                <Text style={styles.closeText}>&#x2715;</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textContainer}>
            <Text style={styles.h1}>Private Key</Text>
            <Text style={styles.h2}>WARNING</Text>
            <Text style={styles.h3}>*DO NOT SHARE THIS KEY*</Text>
            <Text style={styles.text}>{props.privateKey}</Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  links: {
    color: 'rgb(51,102,187)',
    fontWeight: 'bold',
    margin: 10,
  },
  textContainer: {
    borderRadius: 150,
    padding: 5,
  },
  text: {
    padding: 5,
    marginTop: 5,
    fontSize: 14,
    textShadowOffset: { width: -1, height: 1 },
    color: Colors.dark,
    fontWeight: 'bold',
  },
  h2: {
    padding: 5,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, .75)',
    shadowOpacity: .5,
    elevation: 20,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 2,
    color: Colors.dark,
    fontWeight: 'bold',
  },
  h3: {
    padding: 5,
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.dark,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 2 },
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 20,
    shadowOffset: { width: 3, height: 6 },
    textShadowRadius: 10,
    shadowRadius: 10,
    backgroundColor: '#2EE59D',
    shadowOpacity: 2.5,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  regView: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 24,
  },
  close: {
    flex: 1,
    position: 'absolute',
    right: 15,
    top: 20,
    bottom: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    zIndex: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50
  },
  closeText: {
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'center',
    zIndex: 5,
  },
  linkHelpers: {
    marginLeft: 10
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default PrivKeyModal;