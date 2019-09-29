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
import { ProgressBar, Colors, Button, Title, Modal } from 'react-native-paper';

import PollForm from "../components/Poll";
import PollBadge from "../components/PollBadge";
import ShareModal from "../components/ShareModal";
import colors from '../constants/Colors';
import AppHeader from "../components/AppHeader";

const { width, height } = Dimensions.get('window');

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

const PollScreen = (props) => {
  const [progress, setProgress] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const item = props.navigation.getParam('props', {});
  const { steps, type, q } = item;
  const nextStep = () => {
    if (progress === steps - 1) {
      setDone(true);
      setModalVisible(true);
      setProgress(progress + 1);
      return
    }
    if (progress === steps) return;
    setProgress(progress + 1);
  };

  return (
    <ScrollView>
      <View style={{width, height}}>
        <ImageBackground style={{...styles.image, width}} source={item.src} >
          <View style={styles.info}>
            <PollBadge {...item} />
            <View style={{ marginLeft: 15 }}>
              <Title style={{color: '#fff', lineHeight: 23}}>{item.title}</Title>
              <Text style={{color: '#fff'}}>До {item.expired}</Text>
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
            <ProgressBar style={{ width: width - 40 }} progress={progress / steps} color={Colors.red800} />
            <PollForm {...q[progress]} />
            {!done &&
            <Button
              style={{ marginTop: 12 }}
              color={colors.red}
              mode="contained"
              onPress={() => nextStep()}
            >
              { steps - progress === 1 ? 'Готово' : 'Далее' }
            </Button>
            }
            {done && <Feather name="check-circle" size={60} color="#0088bb"/>}
          </>
          }
          <PollForm {...item} />
        </View>
      </View>
      <ShareModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </ScrollView>
  )
};

PollScreen.navigationOptions = ({navigation}) => (
    {
        header: () => {
            const item = navigation.getParam('props', {});
            return (
                <AppHeader title={item.title} back={true} navigation={navigation}>
                    <Feather name="user" size={24} color={Colors.primary} onPress={() => navigation.navigate('Profile')}/>
                </AppHeader>
            )
        }
    }
);

export default PollScreen
