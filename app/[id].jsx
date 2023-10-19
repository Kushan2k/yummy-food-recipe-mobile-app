import { View,  ActivityIndicator, Pressable, ToastAndroid,} from 'react-native'
import React, { useEffect, useState } from 'react'
import {  router,  useGlobalSearchParams } from 'expo-router'

import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import DetailItem from '../componants/DetailItem';
import { Entypo } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

export default function itemdetails() {

  const { id } = useGlobalSearchParams()

  const [loading,setloading]=useState(true)
  
  const data = useSelector(state => state.item.items)

  const [item,setitem]=useState({})
  
  useEffect(() => {
    setitem(data.filter((i) => i.id === parseInt(id))[0])
    if (item) {
      setloading(false)
    }
    
  }, [])
  
  async function saveItem() {
    const isfound = await SecureStore.getItemAsync(id)
    
    if (isfound) {
      ToastAndroid.show("Already saved item found!", ToastAndroid.SHORT)
      return
    }
    await SecureStore.setItemAsync(id, JSON.stringify(item))
    ToastAndroid.show("item saved",ToastAndroid.SHORT)
    
  }

  
  return (
    <View style={{backgroundColor:'#000',flex: 1 }}>
      <View style={{
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex:200
        
      }}>
        <Pressable style={{ marginHorizontal: 5 }}
          onPress={() => {
                router.back()
        }}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>
      </View>

      <View style={{
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex:200
        
      }}>
        <Pressable style={{ marginHorizontal: 5 }} onPress={saveItem}>
          <Entypo name="bookmarks" size={35} color="white" />
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