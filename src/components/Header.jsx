import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import colors from '../utils/colors'
import { Modal } from 'react-native'
import auth from '@react-native-firebase/auth';


const Header = () => {
    const [showModal, setShowModal] = useState(false)

    const handleThreeDotPressed = () => {
        console.log("handleThreeDotPressed pressed")
        setShowModal(true);
    }

    const handleLogout = async()=>{
        try{
            const result = await auth().signOut();
            console.log('User signed out! result', result)        
        }catch(err){
            console.log("error in handleLogout", err)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Image source={require("../assets/WhatsApp_logo.png")} style={styles.logo}></Image>
            <View style={styles.iconsContainer}>
                <Feather name={"camera"} size={30} color="white" />
                <AntDesign name={"search1"} style={styles.cameraStyle} size={30} color="white" />
                <Entypo name={"dots-three-vertical"} size={25} style={{}} color="white" onPress={handleThreeDotPressed} />
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: colors.darkTeal,
        borderRadius: 10,
        alignItems: 'center'
    },
    logoutButton: {
        backgroundColor: colors.brightGreen,
        padding: 10,
        borderRadius: 5
    },
    logoutText: {
        color: 'white',
        fontSize: 18
    }

})