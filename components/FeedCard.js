import React from 'react';
import {Card, Title, withTheme} from 'react-native-paper';
import {
  View, StyleSheet
} from 'react-native';
import PollBadge from "./PollBadge";

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
    alignContent: 'center',
  },
});

const Info = withTheme((props) => {
  const { theme: { colors }} = props;
  return (
    <View style={styles.info}>
      <PollBadge {...props} />
      <Title style={{color: colors.surface}}>{props.title}</Title>
    </View>
  )
});

const FeedCard = (props) => (
  <Card style={styles.card}>
    <Card.Cover source={require('../assets/images/Image.png')} />
    <Card.Content style={styles.infoWrapper}>
      <Info {...props}/>
    </Card.Content>
  </Card>
);

export default FeedCard;
