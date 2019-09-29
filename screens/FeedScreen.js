import React from 'react';
import Carousel from "../components/Carousel";
import FeedList from '../components/FeedList';
import { ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppHeader from "../components/AppHeader";
import {Feather} from "@expo/vector-icons";
import Colors from '../constants/Colors';

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

FeedScreen.navigationOptions = ({navigation}) => (
    {
        header: () => (
            <AppHeader title='Главная'>
                <Feather name="user" size={24} color={Colors.primary} onPress={() => navigation.navigate('Profile')} />
                <Feather style={{marginLeft: 24}} name="search" size={24} color={Colors.primary} />
            </AppHeader>
        )
    }
);

export default FeedScreen;
