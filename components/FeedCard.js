import React from 'react';
import {Card, Title, withTheme} from 'react-native-paper';
import {
  View, StyleSheet,
} from 'react-native';
import PollBadge from "./PollBadge";
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  card: {
    marginTop: 8,
    marginHorizontal: 8,
  },
  infoWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
});

const Info = withTheme((props) => {
  const { theme: { colors }} = props;
  return (
    <View style={styles.info}>
      <PollBadge {...props} />
      <Title style={{color: colors.surface, lineHeight: 23}}>{props.title}</Title>
    </View>
  )
});

const FeedCard = (props) => {
  const { navigation, src } = props;

  const go2Details = () => {
    navigation.navigate('Details', { props });
  };

  return (
    <Card onPress={go2Details} style={styles.card}>
      <Card.Cover source={src} />
      <Card.Content style={styles.infoWrapper}>
        <Info {...props}/>
      </Card.Content>
    </Card>
  );
};

export default withNavigation(FeedCard);
