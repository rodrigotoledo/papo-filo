import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../App/context';
import { CustomButtom } from './styles';

export default SignInButton = () => {
  const { signIn } = React.useContext(AuthContext);
  return (
  <View style={{width: '100%'}}>
    <CustomButtom onPress={() => signIn()}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Icon name="sign-in" size={20} color='#fff' style={{marginTop: 4}} />
        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 10 }}>
          Entrar em sua conta
        </Text>
      </View>
    </CustomButtom>
  </View>
  );
}