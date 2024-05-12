import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcons from '../utils/VectorIcons'
import colors from '../utils/colors'

const RecentCallListItem = ({imgSource, name, isIncoming, date, time, isVideoCall}) => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
            <Image source={imgSource} style={styles.avtar}></Image>
            <View style={styles.callDetails}>
                <Text style={{color:colors.white, fontSize:16, fontWeight:"700"}} >{name}</Text>
                <View style={styles.callDateTime}>
                    {
                        isIncoming ?  
                        <VectorIcons type='Feather' name='arrow-down-left' color={"red"}></VectorIcons>
                        :
                        <VectorIcons type='Feather' name='arrow-up-right' color={colors.buttonGreen}></VectorIcons>
                    }
                    <Text style={{color:colors.lightGrey}}>{date}, {time}</Text>
                </View>
            </View>
        </View>
        {
            isVideoCall ?
            <VectorIcons type='FontAwesome' name='video-camera' color={colors.buttonGreen} size={25}></VectorIcons>
            :
            <VectorIcons type='FontAwesome5' name='phone-alt' color={colors.buttonGreen} size={25}></VectorIcons>
        }

    </View>
  )
}

export default RecentCallListItem

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        padding:15,
        justifyContent:"space-between",
        backgroundColor:colors.darkCharcol
    },
    leftContainer:{
        display:"flex",
        flexDirection:"row",
        gap:20,
        alignItems:"center"
    },
    avtar:{
        resizeMode:"cover",
        height:50,
        width:50,
        borderRadius:50
    },
    callDetails:{
        display:"flex",
        gap:5
    },
    callDateTime:{
        display:"flex",
        flexDirection:"row",
        gap:5
    }
})