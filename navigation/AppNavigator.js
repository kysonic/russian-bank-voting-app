import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from '../screens/AuthScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PollScreen from '../screens/PollScreen';

const MainNavigator = createStackNavigator(
    {
        Auth: AuthScreen,
        Home: FeedScreen,
        Profile: ProfileScreen,
        Details: PollScreen,
    },
    {
        initialRouteName: 'Profile'
    }
);

export default createAppContainer(
    MainNavigator
);
