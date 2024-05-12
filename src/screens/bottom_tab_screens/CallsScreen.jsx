import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateCallLink from '../../components/CreateCallLink'
import RecentCallsList from '../../components/RecentCallsList'
import { ScrollView } from 'react-native-gesture-handler'

const CallsScreen = () => {
  return (
    <ScrollView>
      <CreateCallLink></CreateCallLink>
      <RecentCallsList></RecentCallsList>
    </ScrollView>
  )
}

export default CallsScreen

const styles = StyleSheet.create({})