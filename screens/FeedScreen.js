import React from 'react';
import Carousel from "../components/Carousel";
import FeedList from '../components/FeedList';
import { ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppHeader from "../components/AppHeader";

const FeedScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Carousel {...props}/>
        <FeedList/>
      </ScrollView>
    </SafeAreaView>
  )
};

FeedScreen.navigationOptions = {
  header: AppHeader,
};

export default FeedScreen;
