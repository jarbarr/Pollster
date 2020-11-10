import React, { useState } from 'react';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Animated,
  Modal,
  Alert,
  Button,
  ImageBackground,
  Linking,
} from 'react-native';

import ExitButton from './Buttons/Vote/Exit.js';
import SubmitButton from './Buttons/Vote/SubmitBallot.js';
import BallotModal from './Modals/Vote/Ballot.js';
import H1 from './Headers/Vote/H1.js';
import H2 from './Headers/Vote/H2.js';
import H3 from './Headers/Vote/H3.js';
import H4 from './Headers/Vote/H4.js';
import H5 from './Headers/Vote/H5.js';
import H6 from './Headers/Vote/H6.js';
import H7 from './Headers/Vote/H7.js';
import H8 from './Headers/Vote/H8.js';
import H9 from './Headers/Vote/H9.js';
import H10 from './Headers/Vote/H10.js';
import H11 from './Headers/Vote/H11.js';
import H12 from './Headers/Vote/H12.js';
import H13 from './Headers/Vote/H13.js';

const Vote = (props) => {
  const [page, setPage] = useState(1);
  const [ballot, seeBallot] = useState(true);
  const [form1, setForm1] = useState('');
  const [form2, setForm2] = useState('');
  const [form3, setForm3] = useState('');
  const [form4, setForm4] = useState('');
  const [form5, setForm5] = useState('');
  const [form6, setForm6] = useState('');
  const [form7, setForm7] = useState('');
  const [form8, setForm8] = useState('');
  const [form9, setForm9] = useState('');
  const [form10, setForm10] = useState('');
  const [form11, setForm11] = useState('');
  const [form12, setForm12] = useState('');
  const [form13, setForm13] = useState('');
  const [form14, setForm14] = useState('');
  const [form15, setForm15] = useState('');
  const [form16, setForm16] = useState('');
  const [form17, setForm17] = useState('');
  const [form18, setForm18] = useState('');
  const [form19, setForm19] = useState('');
  const [form20, setForm20] = useState('');
  const [form21, setForm21] = useState('');
  const [form22, setForm22] = useState('');
  const [form23, setForm23] = useState('');
  const [form24, setForm24] = useState('');
  const [form25, setForm25] = useState('');
  const [form26, setForm26] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <BallotModal page={page} setPage={setPage} ballot={ballot} seeBallot={seeBallot} form1={form1} form2={form2} form3={form3} form4={form4} form5={form5} form6={form6} form7={form7} form8={form8} form9={form9} form10={form10} form11={form11} setForm1={setForm1} setForm2={setForm2} setForm3={setForm3} setForm4={setForm4} setForm5={setForm5} setForm6={setForm6} setForm7={setForm7} setForm8={setForm8} setForm9={setForm9} setForm10={setForm10} setForm11={setForm11} setForm12={setForm12} setForm13={setForm13} setForm14={setForm14} setForm15={setForm15} setForm16={setForm16} setForm17={setForm17} setForm18={setForm18} setForm19={setForm19} setForm20={setForm20} setForm21={setForm21} setForm22={setForm22} setForm23={setForm23} setForm24={setForm24} setForm25={setForm25} setForm26={setForm26} />
          <H1 user={props.user} />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <TouchableOpacity style={styles.main}>
                <H2 />
                <Text style={styles.selection}>{form1}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(1);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H3 />
                <Text style={styles.selection}>{form2}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(2);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H4 />
                <Text style={styles.selection}>{form3}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(3);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H5 />
                <Text style={styles.selection}>{form4}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(4);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H6 />
                <Text style={styles.selection}>{form5}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(5);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H7 />
                <Text style={styles.selection}>{form6}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(6);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H8 />
                <Text style={styles.selection}>{form7}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(7);
                  }}>edit</Text>
                <H9 />
                <Text style={styles.selection}>{form8}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(7);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H10 />
                <Text style={styles.selection}>{form9}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form10}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form11}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form12}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form13}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form14}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form15}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form16}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form17}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form18}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form19}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
                <Text style={styles.selection}>{form20}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(8);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H11 />
                <Text style={styles.selection}>{form21}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(9);
                  }}>edit</Text>
                <Text style={styles.selection}>{form22}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(9);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H12 />
                <Text style={styles.selection}>{form23}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(10);
                  }}>edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.main}>
                <H13 />
                <Text style={styles.selection}>{form24}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(11);
                  }}>edit</Text>
                <Text style={styles.selection}>{form25}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(11);
                  }}>edit</Text>
                <Text style={styles.selection}>{form26}</Text>
                <Text style={styles.edit}
                  onPress={() => {
                    seeBallot(true);
                    setPage(11);
                  }}>edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <SubmitButton user={props.user.firstName} generateSignature={props.generateSignature} ballot={props.ballot} setBallot={props.setBallot} home={props.home} goVote={props.goVote} form1={form1} form2={form2} form3={form3} form4={form4} form5={form5} form6={form6} form7={form7} form8={form8} form9={form9} form10={form10} form11={form11} form12={form12} form13={form13} form14={form14} form15={form15} form16={form16} form17={form17} form18={form18} form19={form19} form20={form20} form21={form21} form22={form22} form23={form23} form24={form24} form25={form25} form26={form26} />
              <ExitButton home={props.home} goVote={props.goVote} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  selection: {
    marginBottom: 5,
    padding: 15,
    width: 300,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    textAlign: 'right',
    // marginLeft: 200,
    padding: 5,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    textShadowOffset: { width: -1, height: 1 },
    color: 'rgb(51,102,187)',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  main: {
    display: 'flex',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 30,
    shadowOpacity: 4,
    backgroundColor: Colors.white,
    // color: '#FFFFFF',
    paddingBottom: 20,
    elevation: 20,
    shadowOffset: { width: 1, height: 20 },
    marginTop: 30,
    alignItems: 'center',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    marginTop: 50,
    fontWeight: '600',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingBottom: 150,
    textAlign: 'center',
  },
});

export default Vote;