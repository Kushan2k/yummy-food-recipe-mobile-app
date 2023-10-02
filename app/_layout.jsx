
import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../store/store'


export default function layout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{headerShown:false}} />
    </Provider>
      
  )
}