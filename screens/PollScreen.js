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
import { ProgressBar, Colors, Button, Title } from 'react-native-paper';

import PollForm from "../components/Poll";
import PollBadge from "../components/PollBadge";
import colors from '../constants/Colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: 220
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 12,
    width
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

const generateDate = () => {
  const min = 1;
  const max = 30;
  const date = new Date(Date.now() + (Math.random() * max + min) * 24 *3600 * 1000);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1);
  const dd = String(date.getDate());
  return `${dd.length < 2 ? '0' + dd : dd}.${mm.length < 2 ? '0' + mm : mm}.${yyyy}`;
};

const PollScreen = (props) => {
  const [progress, setProgress] = React.useState(0);
  const item = props.navigation.getParam('props', {});
  const { steps, type, q } = item;

  return (
    <ScrollView>
      <ImageBackground style={{...styles.image, width}} source={require('../assets/images/Image.png')} >
        <View style={styles.info}>
          <PollBadge {...item} />
          <View style={{ marginLeft: 15 }}>
            <Title style={{color: '#fff'}}>{item.title}</Title>
            <Text style={{color: '#fff'}}>До {generateDate()}</Text>
          </View>
        </View>
      </ImageBackground>
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
              onPress={() => setProgress(i => ++i > q.length ? i - 1 : i)}
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
