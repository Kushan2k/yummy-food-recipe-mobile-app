
import React from 'react'
import { Stack } from 'expo-router'

import Header from '../componants/Header'

export default function layout() {
  return (
    <Stack screenOptions={{
      header:()=><Header/>
    }} />
      
  )
}