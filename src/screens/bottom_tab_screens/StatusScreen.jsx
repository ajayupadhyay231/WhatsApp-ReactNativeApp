import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import StatusHeader from '../../components/StatusHeader'
import RecentUpades from '../../components/RecentUpdates'
import ViewedUpdatesList from '../../components/ViewedUpdatesList'

const StatusScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <StatusHeader></StatusHeader>
      <RecentUpades></RecentUpades>
      <ViewedUpdatesList></ViewedUpdatesList>
    </ScrollView>
  )
}

export default StatusScreen

const styles = StyleSheet.create({
  contentContainerStyle:{
    // padding:10
  }
})