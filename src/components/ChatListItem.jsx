import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import VectorIcons from '../utils/VectorIcons';



const ChatListItem = ({ chatMute, name, lastMessage, time, imageSource }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
                <Image source={imageSource} style={styles.imageContainer} />
                <View style={styles.nameLastChat}>
                    <Text style={{ fontWeight: "400", fontSize: 18, color: colors.white, marginBottom: 5 }}>{name}</Text>
                    <Text style={{ color: colors.white, fontSize: 12 }}>{lastMessage}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={{ textAlignVertical: "auto", color: colors.white }}>{time}</Text>
                {chatMute ? <VectorIcons type={"FontAwesome6"} name={"bell-slash"} color={"white"} size={15}></VectorIcons> : null
                }
            </View>
        </View>
    );
};


export default ChatListItem

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: colors.darkCharcol,
        justifyContent: "space-between"
    },
    leftContainer: {
        display: "flex",
        flexDirection: "row"
    },
    nameLastChat: {
        marginLeft: 12
    },
    imageContainer: {
        resizeMode: "cover",
        height: 40,
        width: 40,
        // backgroundColor:"red",
        borderRadius: 50
    },
    rightContainer: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        gap: 10
    }

})