import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeatherIcon from './WeatherIcon';

function TopInfo({city, dateTime, temparature, weatherType}) {
  return (
    <View style={styles.topInfoWrapper}>
      <View>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.time}>{dateTime}</Text>
      </View>
      <View>
        <Text style={styles.temparature}>{temparature}</Text>
        <View style={styles.weatherTypeWrapper}>
          <WeatherIcon weatherType={weatherType} />
          <Text style={styles.weatherType}>{weatherType}</Text>
        </View>
      </View>
    </View>
  );
}

export default TopInfo;

const styles = StyleSheet.create({
  topInfoWrapper: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'space-between',
  },
  city: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  temparature: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 85,
  },
  weatherTypeWrapper: {
    flexDirection: 'row',
  },
  weatherType: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 34,
    marginLeft: 10,
  },
});
