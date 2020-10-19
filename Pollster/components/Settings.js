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

import ExitSettingsButton from './Buttons/ExitSettingsButton.js';
import H1 from './SettingsHeaders/H1.js';
import TwilioSwitch from './ToggleSwitch/Twilio.js';

const Settings = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <H1 user={props.user}/>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <TouchableOpacity style={styles.main}>
              {/* <H2 /> */}
              <Text style={styles.sectionTitle}>Election Reminders</Text>
              <TwilioSwitch twilio={props.twilio} setTwilio={props.setTwilio} />
              {/* <Text style={styles.sectionTitle}>More Info</Text> */}
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <ExitSettingsButton home={props.home} settings={props.settings}/>
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