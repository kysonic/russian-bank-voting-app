import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
       <Text>Here will be Profile screen</Text>
    </ScrollView>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
