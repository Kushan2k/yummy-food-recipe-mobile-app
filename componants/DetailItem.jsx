import { View, Text, Image, StyleSheet, Dimensions,ScrollView, } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

export default function DetailItem({item}) {
  return (
    <ScrollView style={{zIndex:100}}>
      <Image source={{ uri: item.image }} width={width} height={height*0.4} resizeMode='cover' />
      <View style={{
        padding:10,
      }}>
        <Text style={style.title}>{item.name}</Text>
        <Text style={style.description}>{item.description}</Text>
        <Text style={{ color: '#FFF', marginTop: 10, }}>Ingredients</Text>
        <ScrollView horizontal contentContainerStyle={{
          margin: 10,
          padding: 5,
          
        }} >
          {
            item?.ingredients.map((ing, index) => {
              
              return (
                <View key={index} style={{borderRadius:15,padding:5,marginHorizontal:3,backgroundColor:'#FFF'}}>
                  <Text>{ ing}</Text>
                </View>
              )
            })
          }
        </ScrollView>
        
        <Text style={{color:'#FFF',marginTop:10,}}>Steps to Follow</Text>
        <View style={{
          alignContent: 'center',
          backgroundColor: '#303030',
          padding: 5,
          margin:10,
        }}>
          {
            item.steps.map((step,index) => {
              return (
                <View key={index} style={{flexDirection:'row',alignItems:'center',padding:5}}>
                  <AntDesign name="checksquare" size={20} color="white" />
                  <Text style={{ color: '#FFF',marginHorizontal:5, marginVertical: 5,flexWrap:'wrap' }}  >
                  
                  {step}
                  </Text>
                </View>
              )
            })
          }
        </View>

        
      </View>
    </ScrollView>
  )
}


const style = StyleSheet.create({
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 27,
    
    borderBottomColor: '#FFF',
    borderWidth:1,
    paddingBottom:2,
  },
  description: {
    marginTop:20,
    color: '#FFF',
    fontWeight: '400',
    fontSize:19,
  }
})