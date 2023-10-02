import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header({text}) {
  return (
    <View style={styles.box}>
      <Text  style={styles.header}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  box: {
    height: 200,
    backgroundColor: 'transparent',
    paddingTop: 60,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    
    
    
  },
  header: {
    color: "#fff",
    fontWeight: "900",
    fontFamily:'monospace',
    fontStyle: 'italic',
    fontSize: 35,
    
    
  }
})