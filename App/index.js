import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from './context';
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAqjK2bRUnYoMw_t_BPrpNqMIbVU5YODxk",
  authDomain: "papo-filo.firebaseapp.com",
  projectId: "papo-filo",
  storageBucket: "papo-filo.appspot.com",
  messagingSenderId: "1006354199221",
  appId: "1:1006354199221:web:e68615c2376fc751e584fc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen name="Login" component={TabsAuthScreen} />
  </AuthStack.Navigator>
);

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={TabsScreen} />
    <AppStack.Screen name="Profile" component={ProfileScreen} />
  </AppStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeScreen} />
    <Tabs.Screen name="Profile" component={ProfileScreen} />
  </Tabs.Navigator>
);

const TabsAuthScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Login" component={LoginScreen} options={{title: 'Entrar em sua conta'}} />
    <Tabs.Screen name="Register" component={RegisterScreen} options={{title: 'Criar conta'}} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator()

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode='none'>
    {userToken ? (
      <RootStack.Screen name="App" component={AppStackScreen} />
    ):(
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
)

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(true);
        setUserToken(null);
      }
    };
  },[]);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  })

  if(isLoading){
    return <LoadingScreen />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}