import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import chatData from '../data/chatData'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../utils/colors'
import VectorIcons from '../utils/VectorIcons'

const ChatBody = () => {
    const scrollRef = useRef(null)

    const ThisSideUserMessages = ({message, time}) => {

        return (
            <View style={styles.thisSideMessagesOuterContainer}>
                <View style={styles.thisSideMessagesInnerContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.timeStyle}>{time}</Text>
                </View>
            </View>
        )
    }

    const OtherSideUserMessages = ({message, time})=>{

        return(
            <View style={styles.otherSideMessagesOuterContainer}>
            <View style={styles.otherSideMessagesInnerContainer}>
                <Text style={styles.message}>{message}</Text>
                <Text style={styles.timeStyle}>{time}</Text>
            </View>
        </View>
        )
    }

    const scrollToBottom =()=>{
        scrollRef.current.scrollToEnd({ animated: true });
    }

    return (
        <ImageBackground source={require("../assets/wallpaper.jpeg")} style={styles.imageBackground} >
            <ScrollView style={styles.scrollViewContainer} 
            contentContainerStyle={{padding:10}} 
            onContentSizeChange={scrollToBottom}
            ref = {scrollRef}
            >
                {
                    chatData.map((userItem, index) => {
                        return (
                            <View key = {index}>
                                {
                                    userItem.id == 1 ?
                                       <ThisSideUserMessages  message={userItem.message} time={userItem.time}></ThisSideUserMessages>
                                        :
                                       <OtherSideUserMessages message={userItem.message} time={userItem.time}></OtherSideUserMessages>
                                }
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View style={styles.scrollToBottom}>
                <VectorIcons type={"FontAwesome"} name='angle-double-down' onPress={scrollToBottom}  size={30} color = {colors.white} ></VectorIcons>
            </View>
        </ImageBackground>
    )
}

export default ChatBody

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    scrollViewContainer: {
        flex: 1,
        // padding: 10,
    },
    thisSideMessagesOuterContainer: {
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        // marginVertical:5
    },
    otherSideMessagesOuterContainer: {
        // backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        // marginVertical:5
    },
    thisSideMessagesInnerContainer: {
        backgroundColor: colors.teal,
        display: "flex",
        flexDirection: "row",
        margin: 5,
        padding: 15,
        borderRadius: 20,
        borderTopRightRadius: 0,
        maxWidth: "80%",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        alignItems: "baseline",
        gap: 10
    },
    otherSideMessagesInnerContainer: {
        backgroundColor: colors.charcoal,
        display: "flex",
        flexDirection: "row",
        padding: 15,
        margin: 5,
        borderRadius: 20,
        borderTopLeftRadius: 0,
        maxWidth: "80%",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "baseline",
        gap: 10
    },
    message: {
        fontSize: 18,
        // backgroundColor: "orange",
        display: "flex",
        color: colors.white
    },
    timeStyle: {
        fontSize: 12,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        textAlign: "right",
        color: colors.white,
    },
    scrollToBottom:{
        height:50,
        width:50,
        backgroundColor:colors.charcoal,
        position:"absolute",
        bottom:20,
        right:20,
        borderRadius:40,
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },

})