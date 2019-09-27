import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Todo from '../components/Todo';


export default function HomeScreen() {
  return (
      <ScrollView style={styles.container}>
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
