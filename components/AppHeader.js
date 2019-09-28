import React from 'react';
import Colors from '../constants/Colors';
import {View, Text, StyleSheet, StatusBar, Image, Platform} from 'react-native';
import {ifIphoneX, getStatusBarHeight} from '../libs/iphonex';

export default function AppHeader(props) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    source={require('../assets/images/ic-logo-app.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Банк России</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: ifIphoneX(getStatusBarHeight(), StatusBar.currentHeight),
        backgroundColor: Colors.background
    },
    wrapper: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 28,
        height: 28,
        marginLeft: 15
    },
    text: {
        marginLeft: 29,
        fontFamily: 'Arial',
        fontSize: 21,
        color: Colors.primary,
        fontWeight: 'normal',
        fontStyle: 'normal'
    }
});
