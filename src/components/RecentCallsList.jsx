import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecentCallListItem from './RecentCallListItem'
import recentCallList from '../data/recentCallsList'
import colors from '../utils/colors'

const RecentCallsList = () => {
  return (
    <View>
        <Text style={{color:colors.lightGrey, backgroundColor:colors.darkCharcol, paddingHorizontal:15, paddingVertical:10, fontSize:16}}>Recent</Text>
        {
        recentCallList.map((item)=>{
            return(
                <RecentCallListItem key={item.id} imgSource={item.avtarImgSource} name={item.name} isIncoming = {item.isIncoming}  date={item.date} time={item.time} isVideoCall = {item.isVideoCall}></RecentCallListItem>
            )
        })
       }
      {/* <RecentCallListItem></RecentCallListItem> */}
    </View>
  )
}

export default RecentCallsList

const styles = StyleSheet.create({})