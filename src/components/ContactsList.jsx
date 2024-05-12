import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ContactsListItem from './ContactsListItem'
import colors from '../utils/colors'
import contactsList from '../data/contactsList'

const ContactsList = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={{color: colors.white}}>Contacts on WhatsApp</Text>
      {
        contactsList.map((item)=>{
            return(
                <ContactsListItem key={item.id} name={item.name}  userImgSrc = {item.userImg}></ContactsListItem>
            )
        }
        )
      }
    </ScrollView>
  )
}

export default ContactsList

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:15,
        paddingVertical:20,
        backgroundColor:colors.darkCharcol,
    },
})