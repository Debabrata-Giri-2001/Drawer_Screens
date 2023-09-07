import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreensArray} from '../../constant/screensArrays';
import CustomDrawer from '../../screens/common/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {ScreensArray.map((_, i) => (
        <Drawer.Screen
          key={i}
          name={_.route}
          component={_.component}
          options={{item: _,}}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerScreens;
const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
