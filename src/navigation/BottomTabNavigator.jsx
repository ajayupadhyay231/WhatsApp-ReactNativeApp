import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/bottom_tab_screens/CommunityScreen';
import ChatsScreen from '../screens/bottom_tab_screens/ChatsScreen';
import StatusScreen from '../screens/bottom_tab_screens/StatusScreen';
import CallsScreen from '../screens/bottom_tab_screens/CallsScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import colors from '../utils/colors';
import VectorIcons from '../utils/VectorIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    
    screenOptions={{
      tabBarStyle: {
        height:85,
        backgroundColor: '#262D36', // Your tab bar background color
        padding:10
      },
      tabBarItemStyle:{
        // borderRadius:70,
      },
      tabBarIconStyle:{
        // borderRadius:30,
      },
      tabBarLabelStyle:{
        // backgroundColor:"red",
        width:"100%",
        marginBottom:10,
        marginTop:5,
        fontWeight:"bold",
        fontSize:12,
        color:colors.white
      },
   
      tabBarActiveTintColor: colors.lightGreen, // Green color for active icon
      // tabBarActiveBackgroundColor: 'rgba(0, 255, 0, 0.1)', // Green background color for active tab
    
    }}
  >
    <Tab.Screen
      name="CommunityScreen"
      component={CommunityScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          // <FontAwesome name="group" size={25} color={ focused ? color: colors.lightGrey} />
          <VectorIcons type={ focused ? "FontAwesome" :"FontAwesome"  } name={focused? "group" : "group"} size={25} color={ focused ? color: colors.white} style={focused ? styles.IconContainerStyle: null}></VectorIcons>
        ),
        tabBarLabel:"Community",
        // tabBarItemStyle:{
        //   borderRadius:100,
        //   marginLeft:10,
        // }
      }}
    />
    <Tab.Screen
      name="ChatsScreen"
      component={ChatsScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          // <MaterialCommunityIcons name="android-messages" size={25} color={focused ? color: colors.lightGrey} />
          <VectorIcons type={ focused ? "MaterialCommunityIcons" :"MaterialCommunityIcons"  } name={focused? "android-messages" : "android-messages"} size={25} color={ focused ? color: colors.white} style={focused ? styles.IconContainerStyle: null}></VectorIcons>

        ),
        tabBarLabel:"Chats"
      }}
    />
    <Tab.Screen
      name="StatusScreen"
      component={StatusScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          // <Entypo name="notification" size={25} color={ focused ? color: colors.lightGrey} />
          <VectorIcons type={ focused ? "Entypo" :"Entypo"  } name={focused? "notification" : "notification"} size={25} color={ focused ? color: colors.white} style={focused ? styles.IconContainerStyle: null}></VectorIcons>

        ),
        tabBarLabel:"Status"
      }}
    />
    <Tab.Screen
      name="CallsScreen"
      component={CallsScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          // <Ionicon name="call-outline" size={25} color={colors.lightGrey} />
          <VectorIcons type={ focused ? "Ionicons" :"Ionicons"  } name={focused ? "call" : "call-outline"} size={25} color={ focused ? color: colors.white} style={focused ? styles.IconContainerStyle: null}></VectorIcons>
        ),
        tabBarLabel:"Calls"
      }}
    />
  </Tab.Navigator>
  
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  IconContainerStyle:{
    height:"100%", 
    width:"70%", 
    backgroundColor:colors.green, 
    borderRadius:70,
    textAlign:"center",
    textAlignVertical:"center",
    // padding:5,
    // marginBottom:5
  }
})