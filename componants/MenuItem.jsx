import { View, Text, StyleSheet,Dimensions, Image } from 'react-native'
import React from 'react'


const width=Dimensions.get('window').width-40
export default function MenuItem({item}) {
  return (
    <View style={styles.container}>
      <Image src={item.image} width={300} height={170} resizeMode='cover'  />
      <View>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginVertical:10,
    borderWidth:0.1,
    borderRadius: 3,
    borderColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: width,
    height:200,
    
  },
  item: {
    color: 'white',
    fontWeight: '600',
    
  }
})