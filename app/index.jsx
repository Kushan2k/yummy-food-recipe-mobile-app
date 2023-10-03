
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import Header from "../componants/Header"
import Main from "../componants/Main"
import Randomdish from "../componants/Randomdish"

export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />
      <Header text={"Let's find you a preast."} />
      <Randomdish/>
      <Main/>
      
        
      
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
