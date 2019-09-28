import React from 'react';
import {Card, Title, withTheme} from 'react-native-paper';
import {
  View, StyleSheet,
} from 'react-native';
import PollBadge from "./PollBadge";

// TODO: gradient fixMe
const styles = StyleSheet.create({
  card: {
    backgroundImage: 'linear-gradient(180deg, rgba(36,34,46,0.00) 0%, #24222E 100%)',
    marginVertical: 8,
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
  title: {
    flex: 1,
    flexShrink: 1,
  }
});

const Info = withTheme((props) => {
  const { theme: { colors }} = props;
  const titleStyles = {
    ...styles.title,
    color: colors.surface
  };

  return (
    <View style={styles.info}>
      <PollBadge {...props} />
      <View style={{flex: 1}}>
        <Title style={titleStyles}>{props.title}</Title>
      </View>
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
