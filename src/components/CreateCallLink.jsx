import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcons from '../utils/VectorIcons'
import colors from '../utils/colors'

const CreateCallLink = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.linkIconContainer}>
            <VectorIcons  type="Fontisto" name='link' color={colors.white}></VectorIcons>
        </View>
        <View>
            <Text style={{color:colors.white, fontSize:16, fontWeight:"700"}}>Create call link</Text>
            <Text style={{color:colors.lightGrey, fontSize:12, marginTop:5 }}>Share a link for your WhatsApp call</Text>
        </View>
    </View>
  )
}

export default CreateCallLink

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        flexDirection:"row",
        padding:15,
        gap:20,
        backgroundColor:colors.darkCharcol,
        alignItems:"center"
    },
    linkIconContainer:{
        height:50,
        width:50,
        backgroundColor:colors.buttonGreen,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },

})