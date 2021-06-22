import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { AuthContext } from '../App/context';

export default LoginScreen = ({navigation}) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title='Sign in'
        onPress={() => signIn()}
      />
      <Button title='Create Account'
        onPress={() => {
          navigation.navigate('Register'), {
            screen: 'Register'
          }
        }}
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