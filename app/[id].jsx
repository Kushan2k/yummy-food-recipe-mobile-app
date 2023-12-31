import { View,  ActivityIndicator, Pressable, ToastAndroid,} from 'react-native'
import React, { useEffect, useState } from 'react'
import {  router,  useGlobalSearchParams } from 'expo-router'

import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import DetailItem from '../componants/DetailItem';
import { FontAwesome } from '@expo/vector-icons';
import useDB from '../utils/usedb'

export default function itemdetails() {

  const db=useDB()

  const { id } = useGlobalSearchParams()

  const [loading, setloading] = useState(true)
  const [issaved,setsaved]=useState(false)
  
  const data = useSelector(state => state.item.items)

  const [item, setitem] = useState({})
  
  async function checkitem() {
    
    db.transaction(tx => {
      tx.executeSql("SELECT id FROM saved WHERE item=?", [parseInt(id)], (t, r) => {
        if (r.rows._array.length > 0) {
          setsaved(true)
        }
      })
    })
  }
  
  useEffect(() => {
    setitem(data.filter((i) => i.id === parseInt(id))[0])
    if (item) {
      setloading(false)
    }

    checkitem()

    
  }, [])
  
  async function saveItem() {

    db.transaction(tx => {

      tx.executeSql("SELECT id FROM saved WHERE item=?", [parseInt(id)], (t, r) => {
        
        if (r.rows._array.length > 0) {
          setsaved(true)
          ToastAndroid.show("Already saved item found!", ToastAndroid.SHORT)
          return
        }
        tx.executeSql("INSERT INTO saved(item) VALUES(?)", [parseInt(id)], (t, r) => {
          setsaved(true)
          ToastAndroid.show("item saved", ToastAndroid.SHORT)
          return
        })
      })
      
      
    })
    

    // const isfound = await SecureStore.getItemAsync(id)
    
    // if (isfound) {
    //   ToastAndroid.show("Already saved item found!", ToastAndroid.SHORT)
    //   return
    // }
    // await SecureStore.setItemAsync(id, JSON.stringify(item))
    // ToastAndroid.show("item saved", ToastAndroid.SHORT)
    
    
  }

  async function rmitem() {

    db.transaction(tx => {
      tx.executeSql("DELETE FROM saved WHERE item=?", [parseInt(id)], (t, r) => {
        if (r.rowsAffected > 0) {
          setsaved(false)
          ToastAndroid.show("item removed!",ToastAndroid.SHORT)
        }
      })
    })
    
    // await SecureStore.deleteItemAsync(id)
    // setsaved(false)
    // ToastAndroid.show("item removed!",ToastAndroid.SHORT)
    
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

      {
        issaved ? (
          <View style={{
            position: 'absolute',
            top: 50,
            right: 20,
            zIndex:200
            
          }}>
            <Pressable style={{ marginHorizontal: 5 }} onPress={rmitem}>
              <FontAwesome name="bookmark" size={35} color="white" />
            </Pressable>
          </View>
        ) : (
            <View style={{
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex:200
        
      }}>
        <Pressable style={{ marginHorizontal: 5 }} onPress={saveItem}>
          <FontAwesome name="bookmark-o" size={35} color="white" />
        </Pressable>
      </View>
        )
      }

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