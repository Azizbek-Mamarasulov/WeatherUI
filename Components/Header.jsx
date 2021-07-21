import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import SearchIcon from '../assets/search.svg';
import MenuIcon from '../assets/menu.svg';

function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <SearchIcon width={24} height={24} fill="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuIcon width={24} height={24} fill="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: getStatusBarHeight() + 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
});
