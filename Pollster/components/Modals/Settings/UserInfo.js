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

const UserInfoModal = (props) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.userInfo}
        onRequestClose={() => {
        }}>
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.regView}>
              <TouchableOpacity style={styles.close} onPress={() => {
                props.seeInfo(false);
              }}>
                <View>
                  <Text style={styles.closeText}>&#x2715;</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.h1}>User Information</Text>
                {/* <Text style={styles.h2}>WARNING</Text> */}
                <Text style={styles.h2}>First Name</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.firstName}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>Last Name</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.lastname}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>Mobile</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.mobile}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>Address line1</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.address1}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>Address Line2</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.address2}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>City</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.city}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>State</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.state}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>Zipcode</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.zipcode}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
                <Text style={styles.h2}>Party</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.party}</Text>
                </View>
                <Text style={styles.links}>edit</Text>
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
    textAlign: 'right',
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
  info: {
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, .2)',
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
  },
  h2: {
    padding: 5,
    marginTop: 5,
    fontSize: 18,
    textAlign: 'left',
    color: Colors.dark,
    fontWeight: 'bold',
  },
  h3: {
    padding: 5,
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .2)',
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
    marginLeft: 60,
    marginRight: 60,
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

export default UserInfoModal;