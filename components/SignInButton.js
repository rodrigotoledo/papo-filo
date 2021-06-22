import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../App/context';

export default SignInButton = () => {
  const { signIn } = React.useContext(AuthContext);
  return (
  <View style={{width: '100%'}}>
    <Icon.Button name="sign-in" backgroundColor="#2eab62" size={20} style={{ borderRadius: 8, padding: 16, width: '100%'}} onPress={() => signIn()}>
      <Text style={{ color: '#fff', fontSize: 18, }}>
        Entrar com sua conta
      </Text>
    </Icon.Button>
  </View>
  );
}