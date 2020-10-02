import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Linking,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NewsListItem = (props) => {
  return (
    <>
    <View>
      <Text style={styles.title}>
      {props.newsListItem.headline}{'\n'}
      </Text>
      <Text style={styles.url}
      onPress={() => Linking.openURL(`${props.newsListItem.url}`)}>
        {props.newsListItem.url}
        {/* {props.newsListItem.image} */}
      </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
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

export default NewsListItem;