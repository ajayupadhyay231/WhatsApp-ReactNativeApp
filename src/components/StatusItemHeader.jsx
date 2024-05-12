import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import VectorIcons from '../utils/VectorIcons'
import colors from '../utils/colors'
import { useNavigation } from '@react-navigation/native'



const StatusItemHeader = ({showModal, setShowModal, item}) => {
    useEffect(()=>{
    //    const timeoutId = setTimeout(()=>{
    //         setShowModal(false)
    //     }, 5000)

        return () => {
            // clearTimeout(timeoutId);
          };
    },[])

    const navigation = useNavigation();
    
    const handleBackPressClicked = ()=>{
        // navigation.navigate("StatusScreen")
        setShowModal(false)
    }
  return (
     <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
            <VectorIcons type={"Ionicons"} name={"arrow-back"} color={colors.white} onPress={handleBackPressClicked}></VectorIcons>
            <Image source={item.imageSource} style={styles.imageContainer}></Image>
            <Text style={{color:colors.white, fontSize:18,}}>{item.name}</Text>
        </View>
        <View style={styles.rightContainer}>
        {/* <VectorIcons type={"FontAwesome"} name={"video-camera"} color={colors.white} size={20}></VectorIcons> */}
        {/* <VectorIcons type={"Ionicons"} name={"call"} color={colors.white} size={20}></VectorIcons> */}
        <VectorIcons type={"Entypo"} name={"dots-three-vertical"} color={colors.white}></VectorIcons>
        </View>
    </View>
  )
}

export default StatusItemHeader

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:colors.charcoal,
        padding:15
    },
    leftContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:10
    },
    rightContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    imageContainer:{
        resizeMode:"cover",
        height:40,
        width:40,
        borderRadius:100
    }
})