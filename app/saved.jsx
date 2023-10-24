import { View,FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import MenuItem from '../componants/MenuItem'

export default function SavedScreen() {

  const savedItems = useSelector(state => state.item.saved)
  const items = useSelector(state => state.item.items)
  const [list, setList] = useState([])
  const [loading,setloading]=useState(true)


  useEffect(() => {
    let i = []
    items.forEach(item => {
      if(item.id in savedItems){
        i.push(item)
      }
    })
    
    setList([...i])

    setTimeout(() => {
      setloading(false)
    }, 2000);

    
  },[])
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      padding: 10,
      alignItems: 'center',
      justifyContent:'center'
    }}>

      <Stack.Screen options={{ headerShown: true, title: 'Saved' }}>
        </Stack.Screen>
        
      
      {
        loading ? (
          <ActivityIndicator size={40} color={'white'}/>
        ) : (
            <FlatList
      
              bounces
              refreshing
              data={list}
              style={{
                flex: 1,
                zIndex:100
                }}
                keyExtractor={(item) => item.id}
                renderItem={({item})=><MenuItem item={item}/>}
              />
        )
      }
      
    </View>
  )
}