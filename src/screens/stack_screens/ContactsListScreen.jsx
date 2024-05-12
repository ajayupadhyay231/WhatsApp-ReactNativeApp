import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactListScreeenHeader from '../../components/ContactListScreeenHeader'
import ContactsList from '../../components/ContactsList'

const ContactsListScreen = () => {
  return (
    <View style={styles.maincontainer}>
        <ContactListScreeenHeader></ContactListScreeenHeader>
        <ContactsList></ContactsList>
    </View>
  )
}

export default ContactsListScreen

const styles = StyleSheet.create({
    maincontainer:{
        flex:1
    }
})