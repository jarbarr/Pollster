import React from 'react';
import { SectionList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Colors,} from 'react-native/Libraries/NewAppScreen';

const ElectionsListItem = (props) => {
  return (
    <>
      <Text style={styles.sectionDescription}>
        {props.election.title}:{'\n'}
        {props.election.date}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.white,
    textAlign: 'center',
    backgroundColor: '#2EE59D',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
})

export default ElectionsListItem;