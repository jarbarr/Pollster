import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  TextInput,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

import Form1 from '../../Forms/Vote/Form1.js';
import Form2 from '../../Forms/Vote/Form2.js';
import Form3 from '../../Forms/Vote/Form3.js';
import Form4 from '../../Forms/Vote/Form4.js';
import Form5 from '../../Forms/Vote/Form5.js';
import Form6 from '../../Forms/Vote/Form6.js';
import Form7 from '../../Forms/Vote/Form7.js';
import Form8 from '../../Forms/Vote/Form8.js';
import Form9 from '../../Forms/Vote/Form9.js';
import Form21 from '../../Forms/Vote/Form21.js';
import Form23 from '../../Forms/Vote/Form23.js';
import Form24 from '../../Forms/Vote/Form24.js';

const BallotModal = (props) => {

  return (
    <>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={props.ballot}
        onRequestClose={() => {
        }}>
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.regView}>
              <TouchableOpacity style={styles.close} onPress={() => {
                props.seeBallot(false);
                props.setPage(0);
              }}>
                <View>
                  <Text style={styles.closeText}>&#x2715;</Text>
                </View>
              </TouchableOpacity>
              {props.page === 1 ? <Form1 form1={props.form1} page={props.page} setPage={props.setPage} setForm1={props.setForm1} /> : null}
              {props.page === 2 ? <Form2 form2={props.form2} page={props.page} setPage={props.setPage} setForm2={props.setForm2} /> : null}
              {props.page === 3 ? <Form3 page={props.page} setPage={props.setPage} form3={props.form3} setForm3={props.setForm3} /> : null}
              {props.page === 4 ? <Form4 page={props.page} setPage={props.setPage} setForm4={props.setForm4} /> : null}
              {props.page === 5 ? <Form5 page={props.page} setPage={props.setPage} setForm5={props.setForm5} /> : null}
              {props.page === 6 ? <Form6 page={props.page} setPage={props.setPage} setForm6={props.setForm6} /> : null}
              {props.page === 7 ? <Form7 page={props.page} setPage={props.setPage} setForm7={props.setForm7} setForm8={props.setForm8} />
              : null}
              {props.page === 8 ? <Form9 page={props.page} setPage={props.setPage} setForm9={props.setForm9} setForm10={props.setForm10} setForm11={props.setForm11} setForm12={props.setForm12} setForm13={props.setForm13} setForm14={props.setForm14} setForm15={props.setForm15} setForm16={props.setForm16} setForm17={props.setForm17} setForm18={props.setForm18} setForm19={props.setForm19} setForm20={props.setForm20}/> : null}
              {props.page === 9 ? <Form21 page={props.page} setPage={props.setPage} setForm21={props.setForm21} setForm22={props.setForm22} />
              : null}
              {props.page === 10 ? <Form23 page={props.page} setPage={props.setPage} setForm23={props.setForm23}/>
              : null}
              {props.page === 11 ? <Form24 page={props.page} setPage={props.setPage} setForm24={props.setForm24} setForm25={props.setForm25} setForm26={props.setForm26} seeBallot={props.seeBallot}/>
              : null}
            </View>
          </View>
        </ScrollView>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  modal: {
    marginLeft: 100,
    marginRight: 100,
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
    zIndex: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  closeText: {
    fontWeight: '200',
    fontSize: 24,
    textAlign: 'center',
  },
  regView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
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
    marginTop: 50,

  },
})

export default BallotModal;