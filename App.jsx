import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabsScreen from './src/screens/stack_screens/BottomTabsScreen'
import colors from './src/utils/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ChatScreen from './src/screens/stack_screens/ChatScreen';



const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name = "BottomTabsScreen" component={BottomTabsScreen}></Stack.Screen>
        <Stack.Screen name="ChatScreen" component={ChatScreen}></Stack.Screen>

      {/* <View style={styles.mainContainer} >
        <BottomTabsScreen></BottomTabsScreen>
      </View> */}
      </Stack.Navigator>
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