import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackPramList } from '../../../src/types';
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreens from './DrawerScreens';

const Stack = createNativeStackNavigator<RootStackPramList>();

const index = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="DrawerScreens">
      <Stack.Screen
        name="DrawerScreens"
        component={DrawerScreens}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default index