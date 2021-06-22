import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../App/context';

export default HomeScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Sign Out'
        onPress={() => signOut()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})