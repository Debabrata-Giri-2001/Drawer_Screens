import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../../constant/Colors';
import {constant} from '../../styles';
import {ProjectsArray} from '../../constant/screensArrays';
import Icon from '../../assets/icons/Icons';

const DrawerItem = ({label, onPress, tabBarTestID,type,name}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={styles.drawerItem}
      >
        <Icon type={type} name={name} color={'#333'} style={undefined} />
      <Text style={{color: '#333'}}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = (props: any) => {
  const {state, descriptors, navigation} = props;

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={[styles.view, styles.marginTop]}>
        <Text style={{color: '#333'}}>Header</Text>
      </View>
      {/* Drawer List Item */}
      <DrawerContentScrollView
        {...props}
        style={[styles.view, styles.marginVertical]}>
        {/* <DrawerItemList {...props} /> */}

        {/* 2nd Menu */}
        <View style={[styles.view, styles.marginVertical]}>
          {/* <View style={styles.separator} /> */}
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const {options} = descriptors[route.key];

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            const color = isFocused ? colors.dark : colors.gray;
            // console.log(options);
            const drawerItem = options.item;
            return (
              <DrawerItem
                key={index}
                label={drawerItem.label}
                tabBarTestID={options.tabBarTestID}
                onPress={onPress}
                name={drawerItem.icon}
                type={drawerItem.type}
              />
            );
          })}
        </View>
      </DrawerContentScrollView>
      {/* 2nd menu */}
      {/* profile menu */}
      {/* footer */}
      <View style={[styles.view, styles.marginBottom]}>
        <Text style={{color: '#333'}}>Footer</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: {
    marginBottom: constant.SPACING / 2,
  },
  marginVertical: {
    marginVertical: constant.SPACING / 2,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: constant.SPACING / 2,
    justifyContent: 'space-between',
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: constant.textFontSize,
    color: colors.dark,
    paddingHorizontal: constant.SPACING,
  },
  notificationBadge: {
    paddingVertical: constant.SPACING / 5,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.borderRadius / 2,
  },
  iconContainer: {
    padding: constant.SPACING / 2.4,
    borderRadius: constant.borderRadius,
    margin: constant.SPACING / 2,
    backgroundColor: colors.primary,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGray,
    marginVertical: constant.SPACING / 2,
  },
  headerTitle: {
    fontSize: constant.titleFontSize,
    color: colors.dark,
  },
  profile: {
    marginVertical: constant.SPACING / 2,
    marginRight: constant.SPACING,
    marginLeft: constant.SPACING / 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.light,
  },
  profileText: {
    color: colors.dark,
  },
});
