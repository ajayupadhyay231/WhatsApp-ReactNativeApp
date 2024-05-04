import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const CommunityScreen = () => {
  return (
    <View style={styles.mainConatiner}>
      <Image source={require("../../assets/community-img.png")} style={styles.communityImageContainer}></Image>
      <Text style={{color:colors.white, fontSize:26}}>Introducing communities</Text>
      <Text style={styles.textMessageStyle} >Eadily organise ypur related groups and send announcements. Now, your communities, like neighbourhood or schools, can have their own space.  </Text>
      <TouchableOpacity style={styles.startCommunityButton}>
        <Text style={{fontWeight:"900", fontSize:18}}>Strat your community</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CommunityScreen

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1,
    backgroundColor:colors.darkCharcol,
    justifyContent:"center",
    alignItems:"center"
    
  },
  communityImageContainer:{
    // backgroundColor:"red",
    height:"30%",
    width:"60%",
    resizeMode:"contain"
  },
  textMessageStyle:{
  color:colors.white, 
  width:"80%", 
  fontSize:16,
  marginTop:10,
  textAlign:"center",
  letterSpacing:0.2,
  // backgroundColor:"red"
  },
  startCommunityButton:{
    backgroundColor:colors.buttonGreen,
    width:"80%",
    height:"5%",
    marginTop:20,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
  }
})