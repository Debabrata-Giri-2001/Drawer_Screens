import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
