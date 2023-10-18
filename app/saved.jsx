import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function SavedScreen() {
  return (
    <View>

      <Stack.Screen options={{ headerShown: true, title: 'Saved'}}>
        
      </Stack.Screen>
      <Text>saved</Text>
      
    </View>
  )
}