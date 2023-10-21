import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useSelector } from 'react-redux'

export default function SavedScreen() {

  const savedItems = useSelector(state => state.item.saved)
  
  console.log(savedItems)
  return (
    <View>

      <Stack.Screen  options={{ headerShown: true, title: 'Saved'}}/>
        
      
      <Text>saved</Text>
      
    </View>
  )
}