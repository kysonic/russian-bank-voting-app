import React from 'react';
import { Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';

const defaultStyles = {
    color: Colors.link,
    textDecoration: 'underline'
};

export default function Link({href, children, style}) {
    return (
        <Text style={[defaultStyles, style]} onPress={() => WebBrowser.openBrowserAsync(href)}>{children}</Text>
    );
}
