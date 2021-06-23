import React from 'react'
import { Container, Title, Input } from '../App/styles';
import SignInButton from '../components/SignInButton';
import Icon from 'react-native-vector-icons/FontAwesome';


export default LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  return (
    <Container>
      <Icon name="users" color="#a83295" size={100} style={{  marginBottom: 10 }} />
      <Title>Informe as credenciais para acessar sua conta</Title>
      <Input placeholder="Informe seu email" placeholderTextColor='#fff' value={email} onChangeText={v => setEmail(v)} textContentType='emailAddress' keyboardType='email-address' />
      <Input placeholder="Informe sua senha" placeholderTextColor='#fff' value={password} onChangeText={v => setPassword(v)} secureTextEntry={true} />
      <SignInButton />
    </Container>
  )
}