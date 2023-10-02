import { View, Text, StyleSheet,Dimensions, Image, Pressable } from 'react-native'
import React from 'react'



export default function MenuItem({ item }) {
  
  
  return (
    <Pressable
      
      onPress={() => {
      console.log(item.id)
    }}>
      <View style={styles.container}>
        <Image source={{uri:item.image}} width={150} height={170} resizeMode='cover'  />
        <View style={{
          padding: 10,
          
        }}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.item}>{item.description}</Text>
        </View>
      </View>
    </Pressable>
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
    width:'auto',
    height:200,
    
  },
  title: {
    color: 'white',
    fontWeight: '900',
    
  },
  item: {
    color: 'white',
    fontWeight: '600',
    flexWrap: 'wrap',
    marginTop:10,
  }

})