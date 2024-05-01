import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import colors from './src/utils/colors'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer >
      <View style={styles.mainContainer} >
        <HomeScreen></HomeScreen>
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // backgroundColor: colors.black
  }
})