import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/bottom_tab_screens/CommunityScreen';
import ChatsScreen from '../screens/bottom_tab_screens/ChatsScreen';
import StatusScreen from '../screens/bottom_tab_screens/StatusScreen';
import CallsScreen from '../screens/bottom_tab_screens/CallsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CommunityScreen" component={CommunityScreen}
        // options={{
        //   // tabBarIcon: ({ color, size }) => (
        //   //   // <FontAwesomeIcon icon={faUsers} size={size} color={color} />
        //   // ),
        // }}
      />
      <Tab.Screen name="ChatsScreen" component={ChatsScreen} />
      <Tab.Screen name="StatusScreen" component={StatusScreen} />
      <Tab.Screen name="CallsScreen" component={CallsScreen} />

    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})