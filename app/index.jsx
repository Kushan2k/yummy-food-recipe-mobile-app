
import { StatusBar } from "expo-status-bar"
import { ActivityIndicator, StyleSheet, View,Text, TouchableOpacity } from "react-native"
import Header from "../componants/Header"
import Main from "../componants/Main"
import Randomdish from "../componants/Randomdish"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { load } from "../store/item_reducer"
import { data } from '../dymmydata.js'
import { router } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

export default function App() {
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true)


  const items = useSelector(state => state.item.items)
  let saved=[]
  

  function getSavedItems() {
    
    items.forEach(async(item) => {
      try {
        const i = await SecureStore.getItemAsync(item.id)
        if (i) {
          saved.push(item)
        }
      } catch (e) {
        
      }
    })


  }

  useEffect(() => {

    dispatch(load({items:data,saved:[]}))
    
    getSavedItems()
    setTimeout(() => {
      dispatch(load({items:data,saved:saved}))
      setloading(false)
    }, 2000);
    
  },[])

  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />
      <Header text={"Let's find you a cuisine."} />
      {
        loading ? (
          <View style={{
            flex: 1,
            width:'100%',
            alignItems: 'center',
            justifyContent: 'center',
            
            
          }}>
            <ActivityIndicator size={40} color={'#FFF'} />
            <Text style={{color:'#FFF',marginTop:10,fontWeight:'600',letterSpacing:2}}>Loading...</Text>
          </View>
        ) : (
          <>
              {/* <Randomdish/> */}
              <Text style={{ color: '#FFF', fontWeight: '900', letterSpacing: 2, }}>
                Available Recipies
              </Text>
              <Main />
              <TouchableOpacity
                
                
                
                onPress={()=>router.push('/saved')}
              
                activeOpacity={0.5}
                style={{
                  
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:'center',
                width: 60,
                height: 60,
                position: 'absolute',
                bottom: 20,
                right: 20,
                zIndex: 1000,
                borderRadius:9999,
              }}>
                <Ionicons name="save-sharp" size={50} color="white" />
              </TouchableOpacity>
          </>
        )
      }
      
        
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'flex-start',
    backgroundColor:'#000'
  },
})
