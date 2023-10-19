import {FlatList, Text} from 'react-native'
import React from 'react'

import MenuItem from './MenuItem.jsx'
import { useSelector } from 'react-redux'


export default function Main() {

  const items = useSelector((state) => state.item.items)

 
  
  
  return (
    
    <FlatList
      
      bounces
      refreshing
      data={items}
      style={{
        flex: 1,
        zIndex:100
        }}
        keyExtractor={(item) => item.id}
        renderItem={({item})=><MenuItem item={item}/>}
      />
  )
}
