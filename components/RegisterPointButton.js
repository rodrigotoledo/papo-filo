import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../App/context';
import { CustomButtom } from './styles';

export default RegisterPointButton = () => {
  const { signUp } = React.useContext(AuthContext);
  const [currentDt, setCurrentDt] = React.useState(new Date().toLocaleTimeString())
  React.useEffect(() => {
    let secTimer = setInterval( () => {
      setCurrentDt(new Date().toLocaleTimeString())
    },1000)

    return () => clearInterval(secTimer);
  }, []);
  return (
  <View style={{width: '100%'}}>
    <CustomButtom onPress={() => signUp()}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Icon name="calendar-clock" size={20} color='#fff' style={{marginTop: 2}} />
        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 10 }}>
          Bater Ponto as {currentDt}
        </Text>
      </View>
    </CustomButtom>
  </View>
  );
}