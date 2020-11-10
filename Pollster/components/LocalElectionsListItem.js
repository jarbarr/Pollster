import React from 'react';
import { SectionList,
  Text,
  View,
  StyleSheet,
  Linking,
} from 'react-native';
import { Colors,} from 'react-native/Libraries/NewAppScreen';

const LocalElectionsListItem = (props) => {
  return (
    <>
    <View>
      <Text style={styles.title}>Correspondence Address:</Text>
      <Text style={styles.url}>
        {props.election.correspondenceAddress.city},
        {props.election.correspondenceAddress.line1},
        {props.election.correspondenceAddress.locationName},
        {props.election.correspondenceAddress.state},
        {props.election.correspondenceAddress.zip}
        {'\n'}
      </Text>
      <Text style={styles.title}>Ballot Info Url:</Text>
      <Text style={styles.url}>
        {props.election.ballotInfoUrl}{'\n'}
      </Text>
      <Text style={styles.title}>Election Info Url:</Text>
      <Text style={styles.url} onPress={() => Linking.openURL(`${props.election.electionInfoUrl}`)}>
        {props.election.electionInfoUrl}{'\n'}
      </Text>
      <Text style={styles.title}>Voting Location Finder Url:</Text>
      <Text style={styles.url} onPress={() => Linking.openURL(`${props.election.votingLocationFinderUrl}`)}>
        {props.election.votingLocationFinderUrl}{'\n'}
      </Text>
      {/* <Text style={styles.url}>
        Sources:
        {props.election.sources}{'\n'}
      </Text> */}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '500',
  //   color: Colors.white,
  //   textAlign: 'center',
  //   backgroundColor: '#2EE59D',
  //   textShadowColor: 'rgba(0, 0, 0, 0.75)',
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  // },
  url: {
    padding: 5,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    // color: Colors.black,
    // color: Colors.white,
    // textAlign: 'center',
    // backgroundColor: '#2EE59D',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    color: 'rgb(51,102,187)',
    fontWeight: 'bold',
    // textShadowRadius: 10,
  },
  title: {
    padding: 5,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    // color: Colors.white,
    // textAlign: 'center',
    // backgroundColor: '#2EE59D',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    color: Colors.dark,
    fontWeight: 'bold',
    // textShadowRadius: 10,
  },
})

export default LocalElectionsListItem;