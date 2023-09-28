import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Screen  options={{title:"Welcome"}}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Hello world</Text>
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