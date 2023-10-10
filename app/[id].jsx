import { View, Text, ActivityIndicator, Pressable,} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack,  router,  useGlobalSearchParams } from 'expo-router'

import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import DetailItem from '../componants/detailItem';

export default function itemdetails() {

  const { id } = useGlobalSearchParams()

  const [loading,setloading]=useState(true)
  
  const data = useSelector(state => state.item)

  const [item,setitem]=useState({})
  
  useEffect(() => {
    setitem(data.filter((i) => i.id === parseInt(id))[0])
    setloading(false)
  },[])

  
  return (
    <View style={{/*backgroundColor:'#000',*/flex: 1 }}>
      <View style={{
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex:200
        
      }}>
        <Pressable style={{ marginHorizontal: 5 }} onPress={() => {
                router.back()
        }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
      </View>

      <StatusBar style='auto' />
      
      
      {
        loading ? (
          <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%',}}>
            <ActivityIndicator size={40} color={'#FFF'} />
          </View>
        ) : (
          <DetailItem item={item} />
        )
      }
      
    </View>
  )
}