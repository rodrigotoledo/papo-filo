import React from 'react'
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 18px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 18px;
`;

const Button = styled.TouchableOpacity`
  background-color: #2eab62;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 100%;
`;

const Input = styled.TextInput`
  width: 100%;
  border-radius: 8px;
  background-color: #c0edd3;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000;
`;

export { Title, Container, Button, ButtonText, Input };