import React from 'react';
import NewsListItem from './NewsListItem.js';
import {Text, View} from 'react-native';

const NewsList = (props) => {
  return (
    <>
      <View>
        {props.news.map((newsListItem, i) => (
          <NewsListItem key={i} newsListItem={newsListItem} />
        ))}
      </View>
    </>
  )
}

export default NewsList;