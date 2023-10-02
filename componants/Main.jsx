import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React from 'react'
import {data} from '../dymmydata.js'
import MenuItem from './MenuItem.jsx'


export default function Main() {
  return (
    <FlatList
      
      bounces
      refreshing
      data={data}
      style={{
        flex: 1,
        zIndex:100
        }}
        keyExtractor={(item) => item.id}
        renderItem={({item})=><MenuItem item={item}/>}
      />
  )
}
