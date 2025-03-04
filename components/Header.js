import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Search from './Search';

const Header = () => {
  return (
    <View style={styles.header}>
        <Search />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({})