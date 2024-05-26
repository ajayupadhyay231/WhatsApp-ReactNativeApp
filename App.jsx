import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomTabsScreen from './src/screens/stack_screens/BottomTabsScreen'
import colors from './src/utils/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ChatScreen from './src/screens/stack_screens/ChatScreen';
import ContactsListScreen from './src/screens/stack_screens/ContactsListScreen';
import LoginScreen from './src/screens/stack_screens/LoginScreen';
import SignupScreen from './src/screens/stack_screens/SignupScreen';
import auth from '@react-native-firebase/auth';



const Stack = createStackNavigator()

const App = () => {
  const [loading, setLoading] = useState(true);
  const [authenticationState, setAuthenticationState] = useState(null);

  useEffect(() => {
    // on Auth state change based on user cliked login logout or other factors this 
    // below onAuthStateChanged get trigger the function with new auth state
    const subscriber = auth().onAuthStateChanged(functionToTriggerOnAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])

  // Handle user state changes
  function functionToTriggerOnAuthStateChanged(updatedAuthState) {
    setAuthenticationState(updatedAuthState);
    if (loading) setLoading(false);
  }

  return (
    <>
      {loading ? (<ActivityIndicator ></ActivityIndicator>) : (
        <>
          <StatusBar backgroundColor={colors.charcoal} />
          <NavigationContainer >
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}>
              {authenticationState == null ? (
                <>
                  <Stack.Screen name="LoginScreen" component={LoginScreen} />
                  <Stack.Screen name="SignupScreen" component={SignupScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="BottomTabsScreen" component={BottomTabsScreen} />
                  <Stack.Screen name="ChatScreen" component={ChatScreen} />
                  <Stack.Screen name="ContactsListScreen" component={ContactsListScreen} />
                </>
              )}


              {/* <View style={styles.mainContainer} >
        <BottomTabsScreen></BottomTabsScreen>
      </View> */}
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )

      }

    </>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // backgroundColor: colors.black
  }
})