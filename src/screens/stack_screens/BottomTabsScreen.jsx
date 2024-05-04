import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import BottomTabNavigator from '../../navigation/BottomTabNavigator'
import colors from '../../utils/colors'

const BottomTabsScreen = () => {
  return (
    <View style={styles.mainContainer}>
        <Header></Header>
        <BottomTabNavigator></BottomTabNavigator>
    </View>
  )
}

export default BottomTabsScreen

const styles = StyleSheet.create({
  mainContainer: {
    height:"100%",
    // backgroundColor: colors.black
  }
    
})