import React from 'react';
import { List } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import Carousel from "../components/Carousel";

const list = [
  {
    _id: 1,
    title: 'Title1',
    description: 'Some text1',
    src: 'https://f.sravni.ru/cms/KnowledgeBaseArticle/Picture/mat_68584.jpeg',
  },
  {
    _id: 2,
    title: 'Title2',
    description: 'Lorem50kdjfkdjfkdjfkdjfkdjkfjdkfjdkfjkdfjkdjfkdjfkdjfkdjfkdjfkdjfkjdkfjdkfjdkfjkdfjkdjfkdjfkdjfkjdk',
    src: 'https://f.sravni.ru/cms/KnowledgeBaseArticle/Picture/mat_68584.jpeg'
  }
];

const FeedScreen = (props) => {
  return (
    <>
      <Carousel {...props}/>
      {list.map(item => (
        <List.Item
          key={item._id}
          title={item.title}
          description={item.description}
          left={() => <Avatar.Image size={48} source={item.src} />}
        />
      ))}
    </>
  )
};

export default FeedScreen;
