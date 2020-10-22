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
  Linking,
} from 'react-native';

import ExitButton from './Buttons/Vote/Exit.js';
import H1 from './Headers/Vote/H1.js';

const Vote = (props) => {
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
                <H1/>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <ExitButton home={props.home} goVote={props.goVote}/>
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
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      main: {
        borderRadius: 30,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowRadius: 30,
        shadowOpacity: 4,
        backgroundColor: Colors.white,
        // color: '#FFFFFF',
        paddingBottom: 20,
        elevation: 20,
        shadowOffset: { width: 1, height: 20 },
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