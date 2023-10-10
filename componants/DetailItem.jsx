import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'


const width=Dimensions.get('screen').width

export default function DetailItem({item}) {
  return (
    <View style={{zIndex:100}}>
      <Image source={{ uri: item.image }} width={width} height={250} resizeMode='cover' />
      <Text style={style.title}>{item.name}</Text>
      <Text style={style.title}>{item.description}</Text>
    </View>
  )
}


const style = StyleSheet.create({
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    letterSpacing:1
  }
})