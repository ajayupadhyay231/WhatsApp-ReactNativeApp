import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import chatData from '../data/chatData'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../utils/colors'

const ChatBody = () => {

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

    return (
        <ImageBackground source={require("../assets/wallpaper.jpeg")} style={styles.imageBackground} >
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={{padding:10}}>
                {
                    chatData.map((userItem) => {
                        return (
                            <>
                                {
                                    userItem.id == 1 ?
                                       <ThisSideUserMessages message={userItem.message} time={userItem.time}></ThisSideUserMessages>
                                        :
                                       <OtherSideUserMessages message={userItem.message} time={userItem.time}></OtherSideUserMessages>
                                }
                            </>
                        )
                    })
                }

            </ScrollView>
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
    }
})