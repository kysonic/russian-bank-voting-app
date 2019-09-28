import React from 'react';
import { Button, Card, Title } from 'react-native-paper';
import { FlatList, View } from 'react-native';
import FeedCard from './FeedCard';

const list = [
  {
    _id: 1,
    title: 'Увеличение золотовалютных резервов',
    content: 'Было внесено предложение об увеличении золото-валютного резерва в связи с потенциальной рецессией мирового рынка',
    type: 'poll',
    src: 'url',
    steps: 5,
  },
  {
    _id: 2,
    title: 'Увеличение золотовалютных резервов',
    content: 'Было внесено предложение об увеличении золото-валютного резерва в связи с потенциальной рецессией мирового рынка',
    type: 'vote',
    src: 'url',
    steps: 5,
  },
  {
    _id: 3,
    title: 'Увеличение золотовалютных резервов',
    content: 'Было внесено предложение об увеличении золото-валютного резерва в связи с потенциальной рецессией мирового рынка',
    type: 'extended',
    src: 'url',
    steps: 5,
  }
];

const FeedList = () => (
  <View style={{flex: 1}}>
    <FlatList
      data={list.map(item => { item.key = String(item._id); return item })}
      renderItem={({item}) => <FeedCard {...item}/>}
    />
  </View>
);

export default FeedList;
