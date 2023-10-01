
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      
        
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <Button title="Click Me" onPress={()=>{console.log('pressed!')}}/>
        
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
