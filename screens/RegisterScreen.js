import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../App/context';

export default RegisterScreen = () => {
  const { signUp } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Create Account</Text>
      <Button title='Create Account'
        onPress={() => signUp()}
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