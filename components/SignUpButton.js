import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../App/context';
import { CustomButtom } from './styles';

export default SignUpButton = () => {
  const { signUp } = React.useContext(AuthContext);
  return (
  <View style={{width: '100%'}}>
    <CustomButtom onPress={() => signUp()}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Icon name="user-plus" size={20} color='#fff' style={{marginTop: 2}} />
        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 10 }}>
          Criar Conta
        </Text>
      </View>
    </CustomButtom>
  </View>
  );
}