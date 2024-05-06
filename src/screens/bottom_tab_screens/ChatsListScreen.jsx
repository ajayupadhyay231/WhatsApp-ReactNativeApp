import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from '../../components/ChatListItem'
import chatsListData from '../../data/chatsListData'
import colors from '../../utils/colors'
import VectorIcons from '../../utils/VectorIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const ChatsListScreen = () => {

  const navigation = useNavigation();

  const handleChatListItemClick = () => {
    navigation.navigate("ChatScreen")
  }

  
  return (
    <View style={styles.mainContainer}>
    <ScrollView style={styles.chatListContainer}>
      {
        chatsListData.map((chatDataItem)=>{
          return(
            <TouchableOpacity  key={chatDataItem.id} onPress={handleChatListItemClick}>
                          <ChatListItem chatMute={chatDataItem.chatMute} key={chatDataItem.id} name={chatDataItem.name} lastMessage={chatDataItem.lastMessage} time={chatDataItem.time} imageSource={chatDataItem.imageSource} ></ChatListItem>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
      <View style ={styles.chatIcon}>
        <VectorIcons type={"MaterialCommunityIcons"} name={"message-reply-text"} size={30} color={colors.white}></VectorIcons>
      </View>
    </View>
  )
}

export default ChatsListScreen

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    position:"relative"
  },
  chatListContainer:{
    flex:1,
  },
  chatIcon:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    backgroundColor: colors.buttonGreen,
    borderRadius:40,
    justifyContent:'center',
    alignItems:"center"
  }
})