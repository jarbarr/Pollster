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

import ExitVoteButton from './Buttons/ExitVoteButton.js';
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
            <View style={styles.footer}>
              <ExitVoteButton home={props.home} goVote={props.goVote}/>
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
    });

    export default Vote;