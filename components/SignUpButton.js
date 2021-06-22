import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../App/context';

export default SignUpButton = () => {
  const { signUp } = React.useContext(AuthContext);
  return (
  <View style={{width: '100%'}}>
    <Icon.Button name="user-plus" backgroundColor="#2eab62" size={20} style={{ borderRadius: 8, padding: 16, width: '100%'}} onPress={() => signUp()}>
      <Text style={{ color: '#fff', fontSize: 18, }}>
        Criar sua conta
      </Text>
    </Icon.Button>
  </View>
  );
}