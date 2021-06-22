import React from 'react'
import { Container, Title, Input } from '../App/styles';
import SignUpButton from '../components/SignUpButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default RegisterScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  return (
    <Container>
      <Icon name="user-plus" color="#4c4d4c" size={100} style={{  marginBottom: 10 }} />
      <Title>Informe as credenciais para criar sua conta</Title>
      <Input placeholder="Informe seu email" placeholderTextColor='#4c4d4c' value={email} onChangeText={v => setEmail(v)} textContentType='emailAddress' keyboardType='email-address' />
      <Input placeholder="Informe sua senha" placeholderTextColor='#4c4d4c' value={password} onChangeText={v => setPassword(v)} secureTextEntry={true} />
      <Input placeholder="Informe a confirmação de sua senha" placeholderTextColor='#4c4d4c' value={passwordConfirmation} onChangeText={v => setPasswordConfirmation(v)} secureTextEntry={true} />
      <SignUpButton />
    </Container>
  )
}