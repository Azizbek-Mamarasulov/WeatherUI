import React from 'react';
import {StyleSheet, View} from 'react-native';
import InfoText from './InfoText';

function BottomInfo({wind, rain, humidity}) {
  return (
    <View style={styles.container}>
      <InfoText title="Wind" value={wind} unit="km/h" />
      <InfoText title="Rain" value={rain} unit="%" />
      <InfoText title="Humidity" value={humidity} unit="%" />
    </View>
  );
}

export default BottomInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
