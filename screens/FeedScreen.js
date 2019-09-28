import React from 'react';
import Carousel from "../components/Carousel";
import FeedList from '../components/FeedList';
import { ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const FeedScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
      <ScrollView>
        <Carousel {...props}/>
        <FeedList/>
      </ScrollView>
    </SafeAreaView>
  )
};

export default FeedScreen;
