import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './pages/Auth/Login';
import Sign from './pages/Auth/Sign';
import Messages from './pages/Messages/Messages';

import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  });

  const AuthPages = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthPages />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: colors.headercolor,
              },
              title: 'Dertler',
              headerTintColor: '#fff',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color="#fff"
                  onPress={() => auth().signOut()}
                />
              ),
              headerTitleAlign: 'center',
            }}
            name="Messages"
            component={Messages}
          />
        </Stack.Navigator>
      )}

      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
