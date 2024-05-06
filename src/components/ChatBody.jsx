import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import chatData from '../data/chatData'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../utils/colors'

const ChatBody = () => {
    return (
        <ImageBackground source={require("../assets/wallpaper.jpeg")} style={styles.imageBackground}>
            <ScrollView style={styles.scrollViewContainer}>
                {
                    chatData.map((userItem) => {
                        return (
                            <>
                                {
                                    userItem.id == 1 ?
                                    <View style={styles.thisSideUserMessages}>
                                          <Text style={styles.message}>{userItem.message}</Text>
                                          <Text  style={styles.timeStyle}>{userItem.time}</Text>
                                    </View>
                                    :
                                    <View style= {styles.otherSideUserMessages}>
                                        <Text style={styles.message}>{userItem.message}</Text>
                                        <Text style={styles.timeStyle}>{userItem.time}</Text>
                                    </View>
                                }
                            </>
                            // <View style={[styles.commonStyleMessage, userItem.id == 1 ? styles.thisSideUserMessages :styles.otherSideUserMessages]}>
                            //     <Text>{userItem.message}</Text>
                            //     <Text>{userItem.time}</Text>
                            // </View>
                        )
                    })
                }

                <View style={styles.otherSideUser}>
                    <Text> hello user 2</Text>
                </View>
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
    },
    thisSideUserMessages: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        justifyContent: "flex-end",
        maxWidth:"80%",
        backgroundColor:colors.teal,
        alignSelf:"flex-end",
        flexWrap:"wrap",
        padding:8,
        borderRadius:20,
        borderTopRightRadius:0,
    },
    otherSideUserMessages: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        maxWidth:"80%",
        backgroundColor:colors.charcoal,
        flexWrap:"wrap",
        padding:8,
        borderRadius:20,
        borderTopLeftRadius:0,
    },
    message:{
        color:colors.white,
        fontSize:16
    },
    timeStyle:{
        color:colors.white,
        textAlign:"right",
        alignSelf:"flex-end",
        textAlignVertical:"bottom",
        fontSize:12
    }
})