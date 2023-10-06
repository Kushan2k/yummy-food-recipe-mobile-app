import { View, Text,} from 'react-native'
import React from 'react'
import { Stack,  useGlobalSearchParams } from 'expo-router'

import { StatusBar } from 'expo-status-bar';

export default function itemdetails() {

  const {id} = useGlobalSearchParams()
  // const {id} = useGlobalSearchParams()
  
  
  return (
    <View>
      <StatusBar style='light'/>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <Text>itemdetails</Text>
    </View>
  )
}