import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const BreadDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Category</Text>
      <Button title="Go back to Categories" onPress={() => navigation.navigate("Categories")} />
    </View>
  )
}

export default BreadDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins",
  },
})