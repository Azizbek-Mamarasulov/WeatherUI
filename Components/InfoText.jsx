import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function InfoBar({value}) {
  const width = value / 2;
  let backgroundColor;
  if(width > 33){
    backgroundColor = "#F44336";
  } else if(width > 20){
    backgroundColor = "yellow"
  } else {
      backgroundColor = "#69F0A0";
  }

  return (
    <View style={styles.infoBarContainer}>
      <View
        style={{
          width,
          height: 5,
          backgroundColor
        }}></View>
    </View>
  );
}

function InfoText({title, value, unit}) {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>{title}</Text>
      <Text style={[styles.infoText, {fontSize: 24}]}>{value}</Text>
      <Text style={styles.infoText}>{unit}</Text>
      <InfoBar value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  infoText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  infoBarContainer: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default InfoText;
