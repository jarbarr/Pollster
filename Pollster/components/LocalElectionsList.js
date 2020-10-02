import React from 'react';
import LocalElectionsListItem from './LocalElectionsListItem.js';
import { SectionList, Text, View } from 'react-native';

const LocalElectionsList = (props) => {
  return (
    <>
      <View>
        {props.elections.map((election, i) => (
          <LocalElectionsListItem key={i} election={election} />
        ))}
      </View>
    </>
  )
}

export default LocalElectionsList;