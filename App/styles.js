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
  background-color: #a83295;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 100%;
`;

const Input = styled.TextInput`
  width: 100%;
  border-radius: 8px;
  background-color: #e37fd3;
  padding: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

export { Title, Container, Button, ButtonText, Input };