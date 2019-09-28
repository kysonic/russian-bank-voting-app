import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';
import { Video } from 'expo-av';

export default function Onboarding({text, style}) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
            <Video
                source={require('../assets/video/Movie.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.video}
            />
        </View>
    )
};

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: dimensions.width,
        backgroundColor: Colors.gray
    },
    text: {
        position: 'absolute',
        top: (dimensions.width / 2) - 30,
        textAlign: 'center',
        width: '100%',
        zIndex: 99,
        textTransform: 'uppercase',
        fontSize: 30,
        fontFamily: 'Arial',
        color: Colors.primary
    },
    video: {
        width: '100%',
        height: dimensions.width
    }
});
