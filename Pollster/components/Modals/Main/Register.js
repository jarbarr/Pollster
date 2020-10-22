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

import Register from '../../RegisterForms/Register.js';
import Register2 from '../../RegisterForms/Register2.js';
import Register3 from '../../RegisterForms/Register3.js';

const RegisterModal = (props) => {
  const [page, setPage] = useState(0);

  const saveInfo = () => {

  }

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
            {page === 0 ? <Register close={props.close} page={page} setPage={setPage} setForm1={props.form1}/> : null}
            {page === 1 ? <Register2 close={props.close} page={page} setPage={setPage} setForm2={props.form2}/> : null}
            {page === 2 ? <Register3 fetchKeys={props.fetchKeys} reminder={props.reminder} setReminder={props.setReminder} close={props.close} page={page} setPage={setPage} setForm3={props.form3}/> : null}
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

export default RegisterModal//