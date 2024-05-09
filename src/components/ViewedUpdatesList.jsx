import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import VectorIcons from '../utils/VectorIcons'
import viewedUpdatesList from '../data/viewedUpdatesList'

const ViewedUpdatesList = () => {
  return (
    <View style={styles.mainContainer}>
    <Text style={styles.viewedUpdatesText}>Viewed updates</Text>
    {
        viewedUpdatesList.map((item)=>{
            return(
        <View key = {item.id} style={styles.viewedUpdateItem}>
            <Image source={item.imageSource} style={styles.userImage}></Image>
            <View style={styles.statusTextContainer}>
                <Text style={{ fontSize: 16, fontWeight: "900", color: colors.white }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: colors.lightGrey }}>{item.updateDay} {item.time}</Text>
            </View>
        </View>
            )
        })
    }
   
</View>
  )
}

export default ViewedUpdatesList

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        flexDirection:"column",
        // padding:10
    },
    viewedUpdatesText:{
      padding:15, 
      color:colors.lightGrey, 
      backgroundColor:colors.darkCharcol,
      fontSize:16
    },
    viewedUpdateItem: {
        backgroundColor: colors.darkCharcol,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        gap: 15,
        padding: 15
    },
    userImage: {
        resizeMode: "cover",
        height: 50,
        width: 50,
        borderRadius: 40,
        borderWidth:3,
        borderColor:colors.lightGrey
    },
})