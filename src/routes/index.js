import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen, UserFormScreen} from '../screens';

export const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserForm" component={UserFormScreen} />
    </Stack.Navigator>
  );
};
