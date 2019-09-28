import React from 'react';
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { withTheme } from 'react-native-paper';

const styles = {
  badge: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: 'white',
  }
};

const getIconByType = (props) => {
  const { theme: { colors }} = props;
  const { firmBlue } = colors;

  const { type, steps } = props;
  switch(type) {
    /* голосование - лайк, дизлайк*/
    case 'vote': {
      return (
        <View style={styles.badge}>
          <Feather style={{marginBottom: 2}} name="thumbs-up" size={24} color={firmBlue} />
        </View>
      )
    }
    /* рейтинг, звезды */
    case 'rate': {
      return (
        <View style={styles.badge}>
          <Feather style={{marginBottom: 1}} name="star" size={24} color={firmBlue} />
        </View>
      )
    }
    /* опрос - много вопросов */
    case 'poll': {
      return (
        <View style={styles.badge}>
          <Text style={{ color: firmBlue, fontSize: 10}} >0/{steps}</Text>
        </View>
      )
    }
    /* Развернутый вопрос */
    case 'extended': {
      return (
        <View style={styles.badge}>
          <Feather name="type" size={24} color={firmBlue} />
        </View>
      )
    }
  }
};

export default withTheme((props) => {
  return getIconByType(props)
});
