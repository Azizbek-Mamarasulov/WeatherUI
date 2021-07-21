import React, {useRef} from 'react';
import {Animated, ScrollView, StatusBar} from 'react-native';
import City from './Components/City';
import Header from './Components/Header';
import Indicator from './Components/Indicator';

import Locations from './model/locations';

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    {useNativeDriver: false},
  );

  const items = Locations.map((location, index) => {
    return <City key={location.id} location={location} />;
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}>
        {items}
      </ScrollView>
      <Indicator Locations={Locations} scrollX={scrollX} />
      <Header />
    </>
  );
}
