import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  AsyncStorage,
  Dimensions
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { ProgressBar, Colors, Button } from 'react-native-paper';

import PollForm from "../components/Poll";
import colors from '../constants/Colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: 220
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  content: {
    color: 'black',
  },
  formWrapper: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
  }
});

const PollScreen = (props) => {
  const [progress, setProgress] = React.useState(0);
  const item = props.navigation.getParam('props', {});
  const { steps, type, q } = item;

  return (
    <ScrollView>
      <ImageBackground style={{...styles.image, width}} source={require('../assets/images/Image.png')} />
      <View style={styles.container}>
        <Paragraph style={styles.content}>{item.content}</Paragraph>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginVertical: 15 }}>
          <Feather style={{ marginRight: 10 }} size={20} name="users" color={colors.primary} />
          <Paragraph style={{color: colors.primary}}>Проголосовало 120 человек</Paragraph>
        </View>
        {type === 'poll' && steps && q &&
          <>
            <Text>{progress}/{steps}</Text>
            <ProgressBar style={{ width }} progress={progress / steps} color={Colors.red800} />
            <PollForm {...q[progress]} />
            <Button
              style={{ marginTop: 12 }}
              color={colors.red}
              mode="contained"
              onPress={() => setProgress(i => ++i)}
            >
              Далее
            </Button>
          </>
        }
        <PollForm {...item} />
      </View>
    </ScrollView>
  )
};

export default PollScreen
