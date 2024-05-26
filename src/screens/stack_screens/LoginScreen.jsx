import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import VectorIcon from "../../utils/VectorIcons";
import colors from '../../utils/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// task in whihc faced issue

// task 1: how to make sure that view gets move up 
// - only when the active tab will get hidden by the keyboard if it will open
// - if its get hidden by the keyboard then move only that much so that it just like 
// abive the keyboard not too much above...

// task 1 solution 1
// use scroll view it will do the desired work 
// issue with this solution is that it will disturb the layput og inner views they won't take 
// up the whole width they take only required conetnt width => if u use the 
// contentcontainerStyle prop in scrollview then then inner view will behvae normally takke the 
// layout properly but then the layput get moves up a lot when keybord gets open so back to zero
// no benefit of using scroll view for this


// task 1 sol 2
// => how to use keyboard avoiding view etc to make sure 
//  1. if after opening keyboard active tab will get hide then move view up
// 2. also ensure that view moves only this mush that active tab lie just abive keyboard 


const LoginScreen = ({ navigation }) => {

    const [emailMobileNumber, setEmailMobileNumber] = useState("")
    const [password, setPassword] = useState("")

    const handleCreateNewAccountClick = () => {
        navigation.navigate("SignupScreen")
    }

    const handleLoginPressed = async () => {

        try {
            if (!emailMobileNumber.trim() || !password.trim()) {
                Alert.alert("Please fill all fields");
                return
            }
            const result = await auth().signInWithEmailAndPassword(emailMobileNumber, password);
            // Fetch user data from Firestore using UID
            const userDoc = await firestore().collection('users').doc(result.user.uid).get();
            console.log("User data:", userDoc);


            // Access user data from Firestore document
            if (userDoc.exists) {
                const userData = userDoc.data();
                console.log("User data:", userData);

                // Continue with navigation or other actions
                // navigation.navigate("MainScreen");
            } else {
                console.log("User document does not exist.");
            }
            navigation.navigate("BottomTabsScreen")
        } catch (error) {
            //   console.dir(error);

            //   console.error("error in handleLoginPressed err using console.error:", error)
            console.log("error in handleLoginPressed using console.log err:", error);
            //   console.dir("error in handleLoginPressed using console.dir error",error);
            //   console.log("Full error object:", { ...error });

            let errorMessage = "An unknown error occurred. Please try again.";

            if (error.code === 'auth/invalid-email') {
                errorMessage = "The email address is badly formatted.";
            } else if (error.code === 'auth/user-disabled') {
                errorMessage = "The user account has been disabled.";
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = "There is no user corresponding to the given email.";
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = "The password is invalid or the user does not have a password.";
            }

            Alert.alert("Login Error", errorMessage);
        }
    }

    return (
        // learning : Scroll views helps in making sure active input filed stays just above keybprad in android and 
        // not get hide at top or behind Keyboard but in ios it did't work this way... so try to learn how to 
        // use keyborad avoiding view to achive the desired result that active input not get hide by 
        // keyboard or goes above the height of screen...

        <View style={styles.main_view} >
            {/*  contentContainerStyle={{flex:1}} 
      contentContainerStyle prop with flex: 1, it ensures that the content inside the scroll view expands to fill the entire scrollable area, 
      but not using becasuse its causing the whole content move way tio above
      when keyboard opening i want that view get move up only when active input get hide by 
      keyboarda and also if it gets hide then just moive like 20px above keyboard don'y
      push it like the height of keyboard */}
            {/* <VectorIcon name="arrow-left" type={"FontAwesome5"} size={20} color={colors.black} /> */}
            <View style={styles.top_div} >
                <VectorIcon type='FontAwesome' name="whatsapp" size={55} color={colors.buttonGreen} style={styles.faceboook_icon} />
                <TextInput style={styles.textInputs} placeholder='Enter your email' value={emailMobileNumber} placeholderTextColor={colors.white} onChangeText={(text) => { setEmailMobileNumber(text) }}></TextInput>
                <TextInput style={styles.textInputs} placeholder='Password' placeholderTextColor={colors.white} value={password} onChangeText={(text) => { setPassword(text) }}></TextInput>
                <TouchableOpacity style={styles.login_button} onPress={handleLoginPressed}><Text style={styles.login_button_text}>Log in</Text></TouchableOpacity>
                <Text style={styles.forgot_password_text}>Forgot Password?</Text>
            </View>
            <View style={styles.bottom_div}>
                <TouchableOpacity style={styles.create_new_account}><Text style={styles.create_new_account_text} onPress={handleCreateNewAccountClick}>Create new account</Text></TouchableOpacity>
                <VectorIcon name="meta" size={20} color={colors.buttonGreen} type={"FontAwesome6"} />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    main_view: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.darkCharcol
        // backgroundColor:"orange"
    },
    top_div: {
        // flex: 3, // don't know why but its not wokring properly insde scroll voew main div..
        display: "flex",
        // backgroundColor: "green", 
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: "30%",
        // paddingBottom:"10%"
    },
    bottom_div: {
        // flex: 1, 
        // backgroundColor: "red", 
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "10%"
        // marginEnd:40
    },
    faceboook_icon: {
        marginBottom: "20%",
        // Adjust this value to add space between the icon and the text input
    },
    textInputs: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.buttonGreen,
        fontSize: 16,
        color: colors.white
    },
    login_button: {
        width: "100%",
        height: 50,
        backgroundColor: colors.buttonGreen,
        borderRadius: 20,
        marginTop: 5,
        justifyContent: "center"
    },
    login_button_text: {
        textAlign: "center",
        color: colors.white,
        fontWeight: "700",
        fontSize: 16
    },
    forgot_password_text: {
        fontWeight: "900",
        marginTop: 15,
        marginBottom: 20,
        color: colors.white
    },
    create_new_account: {
        width: "100%",
        height: 50,
        backgroundColor: colors.buttonGreen,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: colors.buttonGreen,
        marginTop: 5,
        justifyContent: 'center', // Align text vertically
        alignItems: 'center', // Align text horizontally,
        marginBottom: 5,
    },
    create_new_account_text: {
        textAlign: "center",
        color: colors.white,
        fontWeight: "500"
    }

})
