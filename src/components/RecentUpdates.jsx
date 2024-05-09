import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import colors from '../utils/colors'
import VectorIcons from '../utils/VectorIcons'
import recentUpdatesList  from "../data/recentUpdatesList"
import ModalComponent from '../utils/ModalComponent'

const RecentUpades = () => {

    const [showModal, setShowModal] = useState(true)
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.recentUpdatesText}>Recent updates</Text>
            {
                recentUpdatesList.map((item)=>{
                    return(
                <View key = {item.id} style={styles.recentUpdateItem}>
                    <Image source={item.imageSource} style={styles.userImage}></Image>
                    <View style={styles.statusTextContainer}>
                        <Text style={{ fontSize: 16, fontWeight: "900", color: colors.white }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, color: colors.lightGrey }}>{item.updateDay} {item.time}</Text>
                    </View>
                </View>
                    )
                })
            }
            {
                <ModalComponent showModal={showModal} setShowModal={setShowModal}>
                    <Text>this is child comp close modal</Text>
                </ModalComponent>
            }
        </View>
    )
}

export default RecentUpades

const styles = StyleSheet.create({
    mainContainer:{
        // flex:""
        // display:"flex",
        // flexDirection:"column",
        // padding:10
    },
    recentUpdatesText:{
      padding:15, 
      color:colors.lightGrey, 
      backgroundColor:colors.darkCharcol,
      fontSize:16
    },
    recentUpdateItem: {
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
        borderColor:colors.brightGreen,
    },

})