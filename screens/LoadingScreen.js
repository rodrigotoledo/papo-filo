import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default LoadingScreen = () =>(
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})