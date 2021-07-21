import React from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
import BottomInfo from './BottomInfo';
import Divider from './Divider';
import TopInfo from './TopInfo';

const {width, height} = Dimensions.get('window');

function getBackgroundImage(weatherType) {
  if (weatherType === 'Sunny') {
    return require('../assets/sunny.jpg');
  } else if (weatherType === 'Night') {
    return require('../assets/sunny.jpg');
  } else if (weatherType === 'Cloudy') {
    return require('../assets/cloudy.jpeg');
  } else if (weatherType === 'Rainy') {
    return require('../assets/rainy.jpg');
  }
}

function City({location}) {
  return (
    <View style={{width, height}}>
      <ImageBackground
        source={getBackgroundImage(location.weatherType)}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: 20,
          }}>
          <TopInfo {...location} />
          <Divider />
          <BottomInfo {...location} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default City;
