import React from 'react';
import { DefaultTheme, Provider, Portal, Modal, List, Title } from 'react-native-paper';
import {Dimensions, Text, View, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const socials = [{
  label: 'facebook',
  _src: require('../assets/images/socials/ic_facebook.png'),
  src: '../assets/images/socials/ic_facebook.png',
}, {
  label: 'Одноклассники',
  _src: require('../assets/images/socials/ic_odnokl.png'),
  src: '../assets/images/socials/ic_odnokl.png',
}, {
  label: 'Twitter',
  _src: require('../assets/images/socials/ic_twitter.png'),
  src: '../assets/images/socials/ic_twitter.png',
}, {
  label: 'Вконтакте',
  _src: require('../assets/images/socials/ic_whatsapp.png'),
  src: '../assets/images/socials/ic_whatsapp.png',
}];

const ShareModal = (props) => {
  const { modalVisible, setModalVisible } = props;
  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <Provider>
      <Portal>
        <Modal
          style={{flex: 1}}
          visible={modalVisible}
          onDismiss={hideModal}
          dismissable
          theme={DefaultTheme}
        >
          <View style={{paddingHorizontal: 40, paddingVertical: 60}}>
            <View style={{backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 20}}>
              <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                <Title>Спасибо за участие!</Title>
                <Text>Поделиться опросом в соцсетях:</Text>
              </View>
              {socials.map((item, index) => (
                <List.Item
                  key={index}
                  title={item.label}
                  left={() => <Image style={{width: 40, height:40}} source={item._src}/>}
                />
              ))}
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
  )
};

export default ShareModal;
