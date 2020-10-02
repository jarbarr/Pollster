import React from 'react';
import ElectionsListItem from './ElectionsListItem.js';
import { SectionList, Text, View } from 'react-native';

const ElectionsList = (props) => {
  return (
    <>
      <View>
        {props.elections.map((election, i) => (
          <ElectionsListItem key={props.elections[i].id} election={election} />
        ))}
      </View>
    </>
  )
}

export default ElectionsList;