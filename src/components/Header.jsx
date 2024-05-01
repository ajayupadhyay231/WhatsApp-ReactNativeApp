import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import colors from '../utils/colors'


const Header = () => {
    return (
        <View style={styles.mainContainer}>
            <Image source={require("../assets/WhatsApp_logo.png")} style={styles.logo}></Image>
            <View style={styles.iconsContainer}>
                <Feather name={"camera"} size={30} color="white" />
                <AntDesign name={"search1"} style={styles.cameraStyle} size={30} color="white" />
                <Entypo name={"dots-three-vertical"} size={25} style={{}} color="white" />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: colors.charcoal
    },
    logo: {
        resizeMode: "contain",
        height: 60,
        width: "30%",
        // backgroundColor:"red",
        margin: 10
    },
    cameraStyle: {


    },
    iconsContainer: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor:"green",
        gap: 20,
        marginRight: 10
    }

})