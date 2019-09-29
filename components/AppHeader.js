import React from 'react';
import Colors from '../constants/Colors';
import {View, Text, StyleSheet, StatusBar, Image, Platform} from 'react-native';
import {ifIphoneX, getStatusBarHeight} from '../libs/iphonex';
import {Feather} from "@expo/vector-icons";

export default function AppHeader({title, back, children, navigation}) {
    const processedTitle = title && title.length > 20 ? `${title.substr(0, 20)}...` : title;

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                {!back && (
                    <Image
                        source={require('../assets/images/ic-logo-app.png')}
                        style={styles.logo}
                    />
                )}
                {
                    back && (
                        <Feather style={{marginLeft: 10}} name="chevron-left" size={24} color={Colors.primary} onPress={() => {
                            navigation.goBack();
                        }} />
                    )
                }
                <Text style={styles.text}>{processedTitle || 'Банк России'}</Text>
            </View>
            <View style={styles.icons}>
                {children}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: ifIphoneX(getStatusBarHeight(), StatusBar.currentHeight),
        backgroundColor: Colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
    icons: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
    }
});
