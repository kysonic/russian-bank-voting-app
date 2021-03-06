import React from 'react'
import {
  View, StyleSheet, Dimensions, ImageBackground
} from 'react-native';

import SideSwipe from 'react-native-sideswipe'
import { withTheme, Title, Paragraph, Subheading } from 'react-native-paper'
import PollBadge from '../components/PollBadge';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const data = [{
  title: 'Новый знак рубля!',
  subtitle: 'Истекает сегодня!',
  description: `Прими участие в определении международного логотипа отечественной валюты! 
                Это реальная возможность принять участие в историческом событии. За победу
                борятся 4 дизайн-проекта. В настоящее время идет финальный этап голосования.`,
  type: 'vote',
},
  {
    title: 'Изменение ключевой ставки!',
    subtitle: 'Истекает завтра!',
    description: `Обсуждение необхожимости изменения 
                  ключевой ставки. В настоящее время в связи со сложной геополитической обстановкой 
                  необходимос сохранить курс валюты стабильным, а инвестиционный климат - привлекательным`,
    type: 'poll',
    steps: 10
  }];

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  itemContainer: {
    paddingLeft: 30,
    paddingRight: 40,
    paddingBottom: 5,
  },
  carousel: {
    width,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
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
    setCurrentSlide(index => ++index > data.length - 1 ? 0 : index)
  };

  const onSlideLeft = () => {
    setCurrentSlide(index => --index < 0 ? data.length - 1 : index)
  };

  const hideCarousel = () => setCarouselVisible(false);

  if (!carouselVisible) return null;
  return (
    <ImageBackground style={{ width }} source={require('../assets/images/blue_gradient_home.png')}>
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
                  <View style={{flex: 1}}>
                    <Title style={{ color: colors.surface}}>
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
    </ImageBackground>
  )
};

export default withTheme(Carousel);
