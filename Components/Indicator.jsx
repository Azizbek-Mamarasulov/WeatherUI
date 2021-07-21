import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';

const WIDTH = Dimensions.get('window').width;

function Indicator({Locations, scrollX}) {
  return (
    <View style={styles.container}>
      {Locations.map((_, index) => {
        const width = scrollX.interpolate({
          inputRange: [
            WIDTH * (index - 1),
            WIDTH * index,
            WIDTH * (index + 1),
          ],
          outputRange: [5, 12, 5],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View key={index} style={[styles.normalDot, {width}]} />
        );
      })}
    </View>
  );
}

export default Indicator;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 140,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
    normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
});
