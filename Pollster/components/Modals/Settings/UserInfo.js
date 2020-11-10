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

import SaveButton from '../../Buttons/Settings/UserInfoModal/SaveChanges.js';

const UserInfoModal = (props) => {

  const [firstName, setFirstName] = useState(props.user.firstName);
  const [fn, setfn] = useState(true);
  const [lastName, setLastName] = useState(props.user.lastName);
  const [ln, setln] = useState(true);
  const [mobile, setMobile] = useState(props.user.mobile);
  const [m, setm] = useState(true);
  const [address1, setAddress1] = useState(props.user.address1);
  const [a1, seta1] = useState(true);
  const [address2, setAddress2] = useState(props.user.address1);
  const [a2, seta2] = useState(true);
  const [city, setCity] = useState(props.user.city);
  const [c, setc] = useState(true);
  const [state, setState] = useState(props.user.state);
  const [s, sets] = useState(true);
  const [zipCode, setZipCode] = useState(props.user.zipcode);
  const [z, setz] = useState(true);

  const saveChanges = () => {
    let update = {};
    update.id = props.user.id;
    update.firstName = firstName;
    update.lastName = lastName;
    update.mobile = mobile;
    update.address1 = address1;
    update.address2 = address2;
    update.city = city;
    update.state = state;
    update.zipCode = zipCode;
    // update.party = party
    props.updateUserInfo(update);
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.userInfo}
        onRequestClose={() => {
        }}>
        <ScrollView style={styles.scrollView}>
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
                  {fn ? <Text style={styles.h3}>{props.user.firstName}</Text> : <TextInput style={styles.textInput} onChangeText={text => setFirstName(text)} value={firstName} keyboardType={'default'} maxLength={30} autoCapitalize={'words'}></TextInput>}
                </View>
                <Text style={styles.links}
                  onPress={() => setfn(!fn)}>edit</Text>
                <Text style={styles.h2}>Last Name</Text>
                <View style={styles.info}>
                  {ln ? <Text style={styles.h3}>{props.user.lastname}</Text> : <TextInput style={styles.textInput} onChangeText={text => setLastName(text)} value={lastName} keyboardType={'default'} maxLength={30} autoCapitalize={'words'}></TextInput>}
                </View>
                <Text style={styles.links}
                  onPress={() => setln(!ln)}>edit</Text>
                <Text style={styles.h2}>Mobile</Text>
                <View style={styles.info}>
                  {m ? <Text style={styles.h3}>{props.user.mobile}</Text> : <TextInput style={styles.textInput} onChangeText={text => setMobile(text)} value={mobile} keyboardType={'phone-pad'} maxLength={30} autoCapitalize={'words'}></TextInput>}
                </View>
                <Text style={styles.links}
                  onPress={() => setm(!m)}>edit</Text>
                <Text style={styles.h2}>Address line1</Text>
                <View style={styles.info}>
                  {a1 ? <Text style={styles.h3}>{props.user.address1}</Text> :
                    <TextInput style={styles.textInput} onChangeText={text => setAddress1(text)} value={address1} keyboardType={'default'} maxLength={30} autoCapitalize={'words'}></TextInput>}
                </View>
                <Text style={styles.links}
                  onPress={() => seta1(!a1)}>edit</Text>
                <Text style={styles.h2}>Address Line2</Text>
                <View style={styles.info}>
                  {a2 ? <Text style={styles.h3}>{props.user.address2}</Text> :
                    <TextInput style={styles.textInput} onChangeText={text => setAddress2(text)} value={address2} keyboardType={'default'} maxLength={30} autoCapitalize={'words'}></TextInput>}
                </View>
                <Text style={styles.links}
                  onPress={() => seta2(!a2)}>edit</Text>
                <Text style={styles.h2}>City</Text>
                <View style={styles.info}>
                  {c ? <Text style={styles.h3}>{props.user.city}</Text> :
                  <TextInput style={styles.textInput} onChangeText={text => setCity(text)} value={city} keyboardType={'default'} maxLength={30} autoCapitalize={'words'}></TextInput>}
                </View>
                <Text style={styles.links}
                onPress={() => setc(!c)}>edit</Text>
                <Text style={styles.h2}>State</Text>
                <View style={styles.info}>
                  {s ? <Text style={styles.h3}>{props.user.state}</Text> :
                  <TextInput style={styles.textInput} onChangeText={text => setState(text)} value={state} keyboardType={'default'} maxLength={30} autoCapitalize={'characters'}></TextInput>}
                </View>
                <Text style={styles.links}
                onPress={() => sets(!s)}>edit</Text>
                <Text style={styles.h2}>Zipcode</Text>
                <View style={styles.info}>
                  {z ? <Text style={styles.h3}>{props.user.zipcode}</Text> :
                  <TextInput style={styles.textInput} onChangeText={text => setZipCode(text)} value={zipCode} keyboardType={'default'} maxLength={30} autoCapitalize={'words'}></TextInput>}
                </View>
                <Text style={styles.links}
                onPress={() => setz(!z)}>edit</Text>
                {/* <Text style={styles.h2}>Party</Text>
                <View style={styles.info}>
                  <Text style={styles.h3}>{props.user.party}</Text>
                </View>
                <Text style={styles.links}>edit</Text> */}
              </View>
              <SaveButton saveChanges={saveChanges} seeInfo={props.seeInfo} />
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
  textInput: {
    padding: 5,
    marginTop: 5,
    color: Colors.grey,
    fontSize: 18,
    textAlign: 'center',
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
  },
  regView: {
    // marginLeft: 60,
    // marginRight: 60,
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
    // margin: 200
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
  // scrollView: {
  //   // backgroundColor: Colors.lighter,
  //   height: 10,
  //   marginRight: 10,
  // },
});

export default UserInfoModal;