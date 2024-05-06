import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/colors'
import VectorIcons from '../utils/VectorIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ChatFooter = () => {
    const [inputMessage, setInputMessage] = useState("")

    // const dynamicWidth = inputMessage ? "80%" : "60%";

    const handleSendClicked = () =>{
        try{
            Alert.alert("message sent")
            setInputMessage("")
        }catch(err){
            console.log("error in handleSendClicked err:", err)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.emojiMessageConatiner} >
                    <VectorIcons type={"MaterialIcons"} name={"emoji-emotions"} size={30} color={colors.white}></VectorIcons>
                    <TextInput style={[styles.messageInput, { width: inputMessage.trim() ? "75%" : "55%" }]} placeholder='Message' placeholderTextColor={colors.white} value={inputMessage} onChangeText={(text) => { setInputMessage(text) }}></TextInput>
                </View>
                <View style={styles.iconsContainer}>
                    <VectorIcons type={"Entypo"} name={"attachment"} size={20} color={colors.white} ></VectorIcons>
                    {
                        inputMessage.trim() ? null :
                            <>
                                <VectorIcons type={"FontAwesome"} name={"rupee"} size={20} color={colors.white} ></VectorIcons>
                                <VectorIcons type={"Entypo"} name={"camera"} size={20} color={colors.white} ></VectorIcons>
                            </>
                    }

                </View>
            </View>
            <View style={styles.voiceRecordingContainer}>
                {inputMessage.trim() ?
                    <VectorIcons type='Ionicons' name='send' size={30} color={colors.white} onPress={handleSendClicked}></VectorIcons>
                    : <VectorIcons type='MaterialIcons' name='keyboard-voice' size={30} color={colors.white}></VectorIcons>
                }
            </View>
        </View>
    )
}

export default ChatFooter

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.charcoal,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    inputContainer: {
        width: "85%",
        height: 50,
        borderRadius: 30,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.lighterCharcoal,
        justifyContent: "space-between"
    },
    voiceRecordingContainer: {
        width: "13%",
        height: 50,
        backgroundColor: colors.buttonGreen,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center'
    },
    emojiMessageConatiner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        // backgroundColor:"green",
        flex: 1
    },
    iconsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:"red",
    },
    messageInput: {
        fontSize: 15,
        padding: 2,
        color: colors.white,
        // backgroundColor:"red",
        flex: 1
        // width:"100%"
    },

})