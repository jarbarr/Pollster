import React, {useState} from 'react';
import { Colors,} from 'react-native/Libraries/NewAppScreen';
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
  Linking
} from 'react-native';

import ExitButton from './Buttons/Settings/Exit.js';
import H1 from './SettingsHeaders/H1.js';
import PartyButton from './Buttons/Settings/Party.js';
import PasswordButton from './Buttons/Settings/Password.js';
import PersonalButton from './Buttons/Settings/Personal.js';
import PrivKeyButton from './Buttons/Settings/PrivKey.js';
import PubKeyButton from './Buttons/Settings/PubKey.js';
import SignatureButton from './Buttons/Settings/Signature.js';
import PrivKeyModal from './Modals/Settings/PrivKey.js';
import PubKeyModal from './Modals/Settings/PubKey.js';
import SignatureModal from './Modals/Settings/Signature.js';
import UserInfoModal from './Modals/Settings/UserInfo.js';
import TwilioSwitch from './ToggleSwitch/Twilio.js';

const Settings = (props) => {
  const [privKey, seePrivKey] = useState(false);
  const [pubKey, seePubKey] = useState(false);
  const [signature, seeSignature] = useState(false);
  const [userInfo, seeInfo] = useState(false);
  const [party, seeParty] = useState(false);
  const [password, seePassword] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <H1 user={props.user}/>
          <View style={styles.body}>
            <PrivKeyModal seePrivKey={seePrivKey} privKey={privKey} privateKey={props.user.private_key}/>
            <PubKeyModal seePubKey={seePubKey} pubKey={pubKey} publicKey={props.user.public_key}/>
            <SignatureModal user={props.user} seeSignature={seeSignature} sign={signature} signature={props.signature}/>
            <UserInfoModal updateUserInfo={props.updateUserInfo} seeInfo={seeInfo} userInfo={userInfo} user={props.user} />
            <View style={styles.sectionContainer}>
              <TouchableOpacity style={styles.main}>
              {/* <H2 /> */}
              <Text style={styles.sectionTitle}>Election Reminders</Text>
              <TwilioSwitch twilio={props.twilio} setTwilio={props.setTwilio} />
              {/* <Text style={styles.sectionTitle}>More Info</Text> */}
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableOpacity style={styles.main}>
              <Text style={styles.sectionTitle}>User Information</Text>
              <PersonalButton seeInfo={seeInfo}/>
              <PrivKeyButton seePrivKey={seePrivKey} />
              <PubKeyButton seePubKey={seePubKey}/>
              <SignatureButton election={props.election} seeSignature={seeSignature}/>
              <PasswordButton seePassword={seePassword}/>
              <PartyButton seeParty={seeParty}/>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <ExitButton home={props.home} settings={props.settings}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
};

    const styles = StyleSheet.create({
      scrollView: {
        backgroundColor: Colors.lighter,
      },
      body: {
        backgroundColor: Colors.white,
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
      main: {
        borderRadius: 30,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowRadius: 30,
        shadowOpacity: 4,
        backgroundColor: Colors.white,
        paddingBottom: 20,
        elevation: 20,
        shadowOffset: { width: 1, height: 20 },
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.5,
        textAlign: 'center',
        marginTop: 10,
      },
    });

    export default Settings;