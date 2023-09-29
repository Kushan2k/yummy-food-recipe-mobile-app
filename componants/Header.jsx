import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';


export default function Header() {
  return (
    
      <View style={style.header}>
        <Pressable>
          <EvilIcons name="arrow-left" size={35} color="red" />
        </Pressable>
      </View>
    
  )
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    height: 140,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    zIndex:100
    
    
  }
})