import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContactsListItem from './ContactsListItem'
import colors from '../utils/colors'
// import contactsList from '../data/contactsList'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


const ContactsList = () => {
  const [contactList, setContactList] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsersList();
  }, [])


  const getUsersList = async () => {
    try {
      const users = await firestore().collection('users').get();
      // console.log("Users collection fetched", users);
      const contactListFetched = await Promise.all(
        users.docs.map(async (doc) => {
          const userData = doc.data();
          const profileImgDownloadUrl = await profileImageDownLoadUrl(userData.profile_img);
          return {
            id: doc.id,
            ...userData,
            profileImgDownloadUrl,
          };
        })
      );

      setContactList(contactListFetched);
      console.log("contactListFetched", contactListFetched)
      setLoading(false)
    } catch (err) {
      console.log("error in getUsers", err)
      setLoading(false)
    }
  }

  const profileImageDownLoadUrl = async(imgPath)=>{
    // console.log("imgPath", imgPath)
    try{
      const url = await storage().ref(imgPath).getDownloadURL();
          // console.log("url", url)
      return url
    }catch(err){
      console.log("error in profileImageDownLoadUrl", err)
    }
  }

  return (
    <ScrollView style={styles.mainContainer}>
      {
        loading ? <ActivityIndicator></ActivityIndicator> :
          (
            <>
              <Text style={{ color: colors.white }}>Contacts on WhatsApp</Text>
              {
                contactList.map((item) => {
                  return (
                    <ContactsListItem key={item.id} name={item.fullName} userImgSrc={item.profileImgDownloadUrl}></ContactsListItem>
                  )
                }
                )
              }
            </>
          )
      }
    </ScrollView>
  )
}

export default ContactsList

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: colors.darkCharcol,
  },
})