import { ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import colors from '../../utils/colors'
import VectorIcon from '../../utils/VectorIcons'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const SignupScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState("")
    const [mobileEmail, setMobileEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleAlreadyHaveAcountClicked = () => {
        navigation.navigate("LoginScreen")
    }
    const handleCreateAccountClicked = async () => {
        try {
            if (!fullName.trim() || !mobileEmail.trim() || !password.trim() || !confirmPassword.trim()) {
                Alert.alert("Please fill all fields");
                return;
            }
            if (password !== confirmPassword) {
                Alert.alert("Password and confirm password are different");
                return;
            }
            const result = await auth().createUserWithEmailAndPassword(mobileEmail, password);
            // Extract user information
            // const { user } = result;

            // Get Firestore reference
            try {
                // Create Firestore document with user information
                await firestore().collection('users').doc(result.user.uid).set({
                    fullName,
                    email: result.user.email,
                    profilePhotoUrl: '', // Placeholder for profile photo URL, you can update it later
                    dateOfRegistration: firestore.FieldValue.serverTimestamp(), // Current server timestamp
                    address: '', // Placeholder for address, you can update it later
                    phoneNumber: '', // Placeholder for phone number, you can update it later
                    dateOfBirth: '', // Placeholder for date of birth, you can update it later
                    // Add other properties as needed
                });
            
                // Document creation successful
                // Show a success message or navigate to the next screen
                Alert.alert('Success', 'Account created successfully');
                // navigation.navigate("NextScreen");
            } catch (error) {
                // Document creation failed
                // Show an error message or log the error
                Alert.alert('Error', 'Failed to create account. Please try again later.');
                console.error('Error creating user document:', error);
            }

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Email already in use', 'Please use a different email address or try logging in.');
                console.log("Error in handleCreateAccountClicked: Email already in use", error);
            } else if (error.code === 'auth/invalid-email') {
                Alert.alert('Invalid email', 'Please provide a valid email address.');
                console.log("Error in handleCreateAccountClicked: Invalid email", error);
            } else if (error.code === 'auth/weak-password') {
                Alert.alert('Weak password', 'Please use a stronger password with at least 6 characters.');
                console.log("Error in handleCreateAccountClicked: Weak password", error);
            } else {
                Alert.alert('Something went wrong', 'Please try again later.');
                console.log("Error in handleCreateAccountClicked:", error);
            }
        }
    }


    return (
        //  <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <View style={styles.main_view} >
            {/* contentContainerStyle={{flex:1}}  not using thsi property of container
        which make all its child take up full width becaause its pushing 
        text filed way to above and not giveibg desired results*/}
            <VectorIcon name="arrow-left" type={"FontAwesome5"} size={20} color={colors.white} onPress={() => { navigation.navigate("LoginScreen") }} />
            <View style={styles.top_div} >
                <VectorIcon type='FontAwesome' name="whatsapp" size={55} color={colors.buttonGreen} style={styles.faceboook_icon} />
                <TextInput style={styles.textInputs} placeholder='Full name' value={fullName} placeholderTextColor ={colors.white} onChangeText={(text) => { setFullName(text) }} />
                <TextInput style={styles.textInputs} placeholder='Enter your email' value={mobileEmail} placeholderTextColor ={colors.white} onChangeText={(text) => { setMobileEmail(text) }} />
                <TextInput style={styles.textInputs} placeholder='Password' value={password} placeholderTextColor ={colors.white} onChangeText={(text) => { setPassword(text) }} />
                <TextInput style={styles.textInputs} placeholder='Confirm Password' value={confirmPassword} placeholderTextColor ={colors.white} onChangeText={(text) => { setConfirmPassword(text) }} />
                <TouchableOpacity style={styles.login_button} onPress={handleCreateAccountClicked}><Text style={styles.login_button_text}>Create Account</Text></TouchableOpacity>
            </View>
            <View style={styles.bottom_div}>
                <TouchableOpacity style={styles.create_new_account}><Text style={styles.create_new_account_text} onPress={handleAlreadyHaveAcountClicked}>Already have an account ?</Text></TouchableOpacity>
                <VectorIcon name="meta" size={20} color={colors.buttonGreen} type={"FontAwesome6"} />
            </View>
        </View>
        //  </KeyboardAvoidingView> 
    )
}

export default SignupScreen

const styles = StyleSheet.create({

    main_view: {
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        padding: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.darkCharcol
        // backgroundColor:"orange"
    },
    top_div: {
        // flex: 3, // don't know why but its not wokring properly insde scroll voew main div..
        // backgroundColor: "green", 
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: "15%",
        // marginTop:"25%",
        // marginBottom:"15%"
    },
    bottom_div: {
        // flex: 1, 
        // backgroundColor: "red", 
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "10%"
        // marginTop:"10%"
    },
    faceboook_icon: {
        marginBottom: "15%",
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
        color: colors.Gray
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
