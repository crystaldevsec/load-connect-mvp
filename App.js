import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadListScreen from './screens/LoadListScreen';
import LoadDetailScreen from './screens/LoadDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="LoadList" component={LoadListScreen} />
        <Stack.Screen name="LoadDetail" component={LoadDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
