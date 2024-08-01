import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import Datadetail from '../Screen/Data/Datadetail';
import Login from '../Screen/Login';

const Stack = createStackNavigator();

export default function DataNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Datadetail" component={Datadetail} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}