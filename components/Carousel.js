import React from 'react'
import {
  View, StyleSheet, Dimensions,
} from 'react-native';

import SideSwipe from 'react-native-sideswipe'
import { withTheme, Title, Paragraph, Subheading } from 'react-native-paper'
import PollBadge from '../components/PollBadge';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const data = [{
  title: 'Выбираем новый знак рубля!',
  subtitle: 'Истекает сегодня!',
  description: `Science has not yet mastered prophecy. We predict too much for the
                next year and yet far too little for the next 10. I know
                what you could say about a day in which you have seen four
                beautiful sunsets.`,
  type: 'vote',
},
  {
    title: 'Изменение ключевой ставки!',
    subtitle: 'Истекает завтра!',
    description: `Science has not yet mastered prophecy. We predict too much for the
                next year and yet far too little for the next 10. I know
                what you could say about a day in which you have seen four
                beautiful sunsets.`,
    type: 'poll',
    steps: 10
  }];

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundImage: 'linear-gradient(to bottom, #0088bb, #00bbee)',
  },
  itemContainer: {
    paddingHorizontal: 30,
    paddingBottom: 15,
  },
  carousel: {
    width,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    paddingHorizontal: 30,
  },
  subtitle: {
    color: '#fff',
  },
  paragraph: {
    color: '#fff',
    marginTop: 10,
  }
});

const closeIconStyles = {
  position: 'absolute',
  width: 24,
  height: 24,
  right: 10,
  top: 26,
  display: 'flex',
  justifyContent: 'center',
  zIndex: 999,
};

const controlsStyles = {
  width: 72,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignSelf: 'flex-end',
};

const Carousel = (props) => {
  const { colors } = props.theme;
  const [carouselVisible, setCarouselVisible] = React.useState(true);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const onSlideRight = () => {
    setCurrentSlide(index => ++index)
  };

  const onSlideLeft = () => {
    setCurrentSlide(index => --index)
  };

  const hideCarousel = () => setCarouselVisible(false);

  if (!carouselVisible) return null;
  return (
    <View style={styles.container}>
      <View style={closeIconStyles}>
        <Feather onPress={hideCarousel} name="x" size={24} color="#fff"/>
      </View>
      <SideSwipe
        data={data}
        style={styles.carousel}
        itemWidth={width}
        threshold={120}
        contentOffset={0}
        index={currentSlide}
        renderItem={({ item }) => (
          <View style={{ width }}>
            <View style={styles.itemContainer}>
              <View style={styles.row}>
                <PollBadge type={item.type} steps={item.steps} />
                <View>
                  <Title style={{ color: colors.surface}} styles={styles.title}>
                    {item.title}
                  </Title>
                  <Subheading style={{ color: colors.surface}}>{item.subtitle}</Subheading>
                </View>
              </View>
              <View style={styles.row}>
                <Paragraph style={styles.paragraph}>
                  {item.description.replace(/\s+/g, ' ')}
                </Paragraph>
              </View>
            </View>
          </View>
        )}
    />
      <View style={controlsStyles}>
        <Feather onPress={onSlideLeft} name="chevron-left" size={24} color="#fff"/>
        <Feather onPress={onSlideRight} name="chevron-right" size={24} color="#fff"/>
      </View>
    </View>
  )
};

export default withTheme(Carousel);
