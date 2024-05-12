import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/colors'
import VectorIcons from '../utils/VectorIcons'
import recentUpdatesList from "../data/recentUpdatesList"
import FullScreenModal from '../utils/FullScreenModal'
import StatusItemHeader from './StatusItemHeader'
import ProgressBar from './ProgressBar'

const RecentUpades = () => {

    const [showModal, setShowModal] = useState(false)

    const [item, setItem] = useState(null) ;

    const handleRecentUpdateItemClick = (item) => {
        try {
            setItem(item);
            // console.log("item", item)
            setShowModal(true);
        } catch (err) {
            console.log("error in handleRecentUpdateItemClick", err)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.recentUpdatesText}>Recent updates</Text>
            {
                recentUpdatesList.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={()=>{handleRecentUpdateItemClick(item)}}>
                            <View  style={styles.recentUpdateItem}>
                                <Image source={item.imageSource} style={styles.userImage}></Image>
                                <View style={styles.statusTextContainer}>
                                    <Text style={{ fontSize: 16, fontWeight: "900", color: colors.white }}>{item.name}</Text>
                                    <Text style={{ fontSize: 14, color: colors.lightGrey }}>{item.updateDay} {item.time}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
            { item &&
                <FullScreenModal showModal={showModal} setShowModal={setShowModal} >
                    <View style={styles.modalMainContainer}>
                        <ProgressBar setShowModal={setShowModal}></ProgressBar>
                        <StatusItemHeader showModal={showModal} setShowModal={setShowModal} item = {item} ></StatusItemHeader>
                        <Image source={item.statusImg} style={styles.statusImage}></Image>
                        <View style={styles.statusFooter}>
                            <Text style={styles.statusCaption}>{item.statusCaption}</Text>
                            <VectorIcons type='AntDesign' name='up' color={colors.white}></VectorIcons>
                            <Text style={{ color: colors.white, margin: 5 }}>Reply</Text>
                        </View>
                    </View>
                </FullScreenModal>
            }
        </View>
    )
}

export default RecentUpades

const styles = StyleSheet.create({
    mainContainer: {
        // flex:""
        // display:"flex",
        // flexDirection:"column",
        // padding:10
    },
    recentUpdatesText: {
        padding: 15,
        color: colors.lightGrey,
        backgroundColor: colors.darkCharcol,
        fontSize: 16
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
        borderWidth: 3,
        borderColor: colors.brightGreen,
    },
    statusImage: {
        resizeMode: "cover",
        height: "78%",
        // flex:1,
        width: "100%",
        marginTop: 0
    },
    statusFooter: {
        flex: 1,
        backgroundColor: colors.charcoal,
        alignItems: "center"
    },
    statusCaption: {
        width: "90%",
        color: colors.white,
        textAlign: "center",
        margin: 10,
        fontSize: 18,
    },
    modalMainContainer:{
        // backgroundColor:
        flex:1,
        backgroundColor:colors.charcoal
    }
})