import { View, Text, ActivityIndicator,} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack,  useGlobalSearchParams } from 'expo-router'

import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

export default function itemdetails() {

  const { id } = useGlobalSearchParams()

  const [loading,setloading]=useState(true)
  
  const data = useSelector(state => state.item)

  let item
  
  useEffect(() => {
    item = data.filter((i) => i.id === parseInt(id))[0]
    console.log(item)
    setloading(false)
  },[id])

  
  return (
    <View>
      <StatusBar style='auto'/>
      <Stack.Screen
        options={{
          headerShown: true,
          title:"Name"
        }}
      />
      {
        loading ? <ActivityIndicator size={40} color={'#000'} /> : (
          <Text>hello world</Text>
        )
      }
      
    </View>
  )
}