import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const ContactsListItem = ({name = "noname", userImgSrc}) => {
  return (
    <View style={styles.mainContainer}>
            <Image source={ userImgSrc ? {uri : userImgSrc} : require("../assets/blank-profile-picture.png")} style={styles.imageContainer}></Image>
            <Text style={{fontSize:16, color:colors.white}}>{name}</Text>
    </View>
  )
}

export default ContactsListItem

const styles = StyleSheet.create({
    mainContainer:{
        paddingVertical:15,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:15
    },
    imageContainer:{
        backgroundColor:colors.Gray,
        resizeMode:"cover",
        height:40,
        width:40,
        borderRadius:100
    }
})