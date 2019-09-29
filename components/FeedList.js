import React from 'react';
import { FlatList, View } from 'react-native';
import FeedCard from './FeedCard';
import list from '../constants/hardcode';

const FeedList = () => (
  <View style={{flex: 1, paddingBottom: 8}}>
    <FlatList
      data={list.map(item => { item.key = String(item._id); return item })}
      renderItem={({item}) => <FeedCard {...item}/>}
    />
  </View>
);

export default FeedList;
