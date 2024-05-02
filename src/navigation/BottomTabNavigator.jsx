import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/bottom_tab_screens/CommunityScreen';
import ChatsScreen from '../screens/bottom_tab_screens/ChatsScreen';
import StatusScreen from '../screens/bottom_tab_screens/StatusScreen';
import CallsScreen from '../screens/bottom_tab_screens/CallsScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import colors from '../utils/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicon from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        height:75,
        backgroundColor: '#262D36', // Your tab bar background color
        padding:10
      },
      tabBarLabelStyle:{
        marginBottom:8
      }
    }}
  >
    <Tab.Screen
      name="CommunityScreen"
      component={CommunityScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="group" size={25} color={colors.lightGrey} />
        ),
        tabBarLabel:"Community",
      }}
    />
    <Tab.Screen
      name="ChatsScreen"
      component={ChatsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="android-messages" size={25} color={colors.lightGrey} />
        ),
        tabBarLabel:"Chats"
      }}
    />
    <Tab.Screen
      name="StatusScreen"
      component={StatusScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="notification" size={25} color={colors.lightGrey} />
        ),
        tabBarLabel:"Status"
      }}
    />
    <Tab.Screen
      name="CallsScreen"
      component={CallsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicon name="call-outline" size={25} color={colors.lightGrey} />
        ),
        tabBarLabel:"Calls"
      }}
    />
  </Tab.Navigator>
  
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})