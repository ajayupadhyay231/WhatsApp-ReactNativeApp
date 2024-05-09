import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import VectorIcons from '../utils/VectorIcons'

const StatusHeader = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.imageAndplusContainer}>
          <Image source={require("../assets/user1.jpeg")} style={styles.userImage}></Image>
          <VectorIcons  type={"AntDesign"} name='pluscircle' color={colors.brightGreen} style={styles.plusIcon}></VectorIcons>
        </View>
        <View style={styles.statusTextContainer}>
            <Text style={{fontSize:16, fontWeight:"900", color:colors.white}}>My Status</Text>
            <Text style={{fontSize:14, color:colors.lightGrey}}>Tap to add status update</Text>
        </View>
    </View>
  )
}

export default StatusHeader

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.darkCharcol,
        display:"flex",
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
        gap:15,
        padding:15
    },
    userImage:{
        resizeMode:"cover",
        height:50,
        width:50,
        borderRadius:40,
        backgroundColor:"red"
    },
    imageAndplusContainer:{
        // backgroundColor:"",
        // display:"flex",
        // flexDirection:"row",
        // alignItems:"baseline"
    },
    plusIcon:{
        // textAlign:"center",
        // justifyContent:"flex-end",
        // alignItems:"center",
        position:"absolute",
        bottom:0,
        right:-5,
        borderRadius:40,
        backgroundColor:colors.white
    }
})