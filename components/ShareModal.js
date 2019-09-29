import React from 'react';
import { DefaultTheme, Provider, Portal, Modal, List, Title } from 'react-native-paper';
import {Dimensions, Text, View, Image} from 'react-native';

const socials = [{
  label: 'facebook',
  src: require('../assets/images/socials/ic_facebook.png'),
}, {
  label: 'Одноклассники',
  src: require('../assets/images/socials/ic_odnokl.png'),
}, {
  label: 'Twitter',
  src: require('../assets/images/socials/ic_twitter.png'),
}, {
  label: 'Вконтакте',
  src: require('../assets/images/socials/ic_whatsapp.png'),
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
                  left={() => <Image style={{width: 40, height:40}} source={item.src}/>}
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
