import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainNavigator = createStackNavigator(
    {
        Auth: AuthScreen,
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: 'Auth'
    }
);

export default createAppContainer(
    MainNavigator
);
