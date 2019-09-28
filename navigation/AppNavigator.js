import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from '../screens/AuthScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainNavigator = createStackNavigator(
    {
        Auth: AuthScreen,
        Home: FeedScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: 'Auth'
    }
);

export default createAppContainer(
    MainNavigator
);
