import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'

export default function Randomdish() {

  const items= useSelector(state => state.item)
  
  const [randomitem, setitem] = useState({})
  
  useEffect(() => {
    const size = items.length
    
    const itemidex = Math.floor(Math.random() * 100) % size
    
    setitem(items[itemidex])

  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe of the day.</Text>
      <View style={{marginTop:10,marginHorizontal:5, }}>
        <MenuItem item={randomitem} />

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