import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Randomdish() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe of the day.</Text>
      <View style={{ flexDirection: 'row',marginTop:10,marginHorizontal:5, }}>
        <Image source={{ uri: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' }} width={150} resizeMode='cover' height={150} crossOrigin='anonymous' />
        
        <View style={{paddingHorizontal:5,paddingVertical:5}}>
          <Text style={styles.menuTitle}>Title</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia pariatur, et repudiandae quaerat nostrum exercitationem. Modi, sequi perspiciatis error illum aspernatur odio, reprehenderit accusamus dolorem sapiente, culpa sunt neque.
          </Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width:'98%'
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight:'500',
  },
  menuTitle: {
    color: '#FFF',
    fontWeight: '900',
    
  },
  description: {
    color: '#FFF',
    marginTop: 10,
    flexWrap:'wrap',
    
  }
})