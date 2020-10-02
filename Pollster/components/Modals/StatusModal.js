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
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

const StatusModal = (props) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.statusVisible}
        onRequestClose={() => {
        }}>
        <View style={styles.centeredView}>
          <View style={styles.regView}>
            <TouchableOpacity style={styles.close2} onPress={() => {
              props.setStatus(false);
            }}>
              <View>
                <Text style={styles.closeText}>&#x2715;</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.linkHelpers}>Click the Link</Text>
              <Text style={styles.linkHelpers}>to see your status</Text>
              <Text style={styles.links}
                onPress={() => Linking.openURL('https://www.vote.org/')}>
                https://www.vote.org/
                  </Text>
            </View>
          </View>
        </View>
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
  close2: {
    flex: 1,
    position: 'absolute',
    right: 10,
    top: 15,
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

export default StatusModal;