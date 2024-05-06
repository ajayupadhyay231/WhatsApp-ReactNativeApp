import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../../components/ChatHeader'
import ChatBody from '../../components/ChatBody'
import ChatFooter from '../../components/ChatFooter'

const ChatScreen = () => {
  return (
    <View style={styles.mainContainer}>
        <ChatHeader></ChatHeader>
        <ChatBody></ChatBody>
        <ChatFooter></ChatFooter>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
})