import React from 'react';
import Carousel from "../components/Carousel";
import FeedList from '../components/FeedList'

const FeedScreen = (props) => {
  return (
    <>
      <Carousel {...props}/>
      <FeedList/>
    </>
  )
};

export default FeedScreen;
