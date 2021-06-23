import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import { Container, Title, Input } from '../App/styles';
import { AuthContext } from '../App/context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import RegisterPointButton from '../components/RegisterPointButton';

const coordinates = {
  latitude: -19.783747,
  longitude: -42.142109,
  latitudeDelta: 0.0015,
  longitudeDelta: 0.00121,
}

export default HomeScreen = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <Container>
      <Icon name="calendar-clock" color="#a83295" size={100} style={{  marginBottom: 10 }} />
      <Title>Vamos bater o ponto?</Title>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={coordinates}
        >
          <Marker
            key={0}
            coordinate={{
              latitude: -19.783747,
              longitude: -42.142109}}
            title={'filo'}
            description={'filo'}
          />
        </MapView>
      </View>
      
      <RegisterPointButton />
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#e37fd3'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    borderWidth: 1
  },
  adius:{
    height:15,
    width:15,
    backgroundColor:'#81BD26',
    overflow:'hidden',
    borderRadius:50/2,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
    },
    markerStyle:{
    height:14,
    width:14,
    backgroundColor:'#81BD26',
    alignItems:'center',
    justifyContent:'center'
    }
})