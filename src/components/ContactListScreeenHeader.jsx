import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcons from '../utils/VectorIcons'
import colors from '../utils/colors'
import { useNavigation } from '@react-navigation/native'

const ContactListScreeenHeader = ({ noOfContacts = 69 }) => {

    const navigation = useNavigation();

    const handleBackPressClicked = () => {
        try {
            navigation.goBack();
        } catch (err) {
            console.log("err in handleBackPressClicked err:", err)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
                <VectorIcons type={"Ionicons"} name={"arrow-back"} color={colors.white} onPress={handleBackPressClicked} size={25}></VectorIcons>
                <View>
                    <Text style={{ color: colors.white, fontSize:16, fontWeight:"700" }}>Select Contacts</Text>
                    <Text style={{ color: colors.lightGrey }}>{noOfContacts} Contacts</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <VectorIcons type="Feather" name='search' color={colors.white} style={styles.searchIcon}></VectorIcons>
                <VectorIcons type={"Entypo"} name={"dots-three-vertical"} color={colors.white} style={styles.threeDots}></VectorIcons>
            </View>
        </View>
    )
}

export default ContactListScreeenHeader

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: colors.charcoal,
        alignItems:"center"
    },
    leftContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent:'center',
        alignItems:"centers"
    },
    rightContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems:"centers"
    },
    searchIcon:{
    },
    threeDots:{
    }

})