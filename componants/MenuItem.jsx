import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router} from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'



export default function MenuItem({ item }) {
  
  
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => {
        router.push(`/${item.id}`)
    }}>
      <View style={styles.containerinner}>
        <Image source={{uri:item.image}} width={150} height={170} resizeMode='cover'  />
        <View>
          <View style={{
          padding: 10,
          
        }}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.item}>{item.description}</Text>
        </View>
          <ScrollView horizontal style={{margin:10}} contentContainerStyle={{
            alignItems: 'baseline',
            alignContent:'space-around'
        }}>
          {
            item?.tags.map((tag, index) => (
              <View key={index} style={{backgroundColor:'#555',borderRadius:20,padding:5,height:40,alignItems:'center',justifyContent:'space-around',margin:5,paddingHorizontal:5,}}>
                <Text style={{color:'#FFF'}}>{tag}</Text>
              </View>
            ))
          }
        </ScrollView>
        </View>
      </View>
    </TouchableOpacity>
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
    width:'100%',
    height:200,
    
  },
  containerinner: {
    flexDirection:'row',
    width:'100%',
    height:200,
    
  },
  title: {
    color: 'white',
    fontWeight: '900',
    flexWrap:'wrap',
    
  },
  item: {
    color: 'white',
    fontWeight: '600',
    flexWrap: 'wrap',
    marginTop:10,
  }

})