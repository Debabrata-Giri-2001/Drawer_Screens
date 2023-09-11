import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useReducer, useRef, useState} from 'react';
import {
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {colors} from '../../constant/Colors';
import {constant} from '../../styles';
import {ProfileMenu, ProjectsArray} from '../../constant/screensArrays';
import Icon, {Icons} from '../../assets/icons/Icons';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Categories} from '../private';

/* Drawer Item list Home,MyInbox,etc... */
const DrawerItem: React.FC<DrawerItemProps> = ({
  label,
  onPress,
  tabBarTestID,
  type,
  name,
  notification,
  color,
  activeItemColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[
        styles.drawerItem,
        activeItemColor ? {backgroundColor: activeItemColor} : null,
      ]}>
      <View style={styles.row}>
        <Icon type={type} name={name} {...{color}} style={undefined} />
        <Text style={[styles.label, {color}]}>{label}</Text>
      </View>
      {notification > 0 && (
        <View
          style={[
            styles.notificationBadge,
            {
              backgroundColor:
                notification > 5 ? colors.important : colors.normal,
            },
          ]}>
          <Text style={{color: '#333'}}>{notification}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

/* 2nd Menu,All About Project 3 Section*/
const ProjectItem: React.FC<ProjectItemProps> = ({
  label,
  onPress,
  type,
  name,
  color,
  activeItemColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, {backgroundColor: activeItemColor}]}>
      <View style={[styles.iconContainer, {backgroundColor: color}]}>
        <Icon type={type} name={name} color={colors.white} style={undefined} />
      </View>
      <Text style={[styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
};
/* Profile Menu Item History,Rate,Etc.. */
const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  label,
  onPress,
  type,
  name,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, {margin: constant.SPACING / 4}]}>
      <Icon type={type} name={name} color={colors.dark} style={undefined} />
      <Text style={[styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = (props: any) => {
  const {state, descriptors, navigation} = props;
  const [show, toggleProfile] = useReducer(s => !s, false);
  const scrollRef = useRef<ScrollView | null>(null);

  const fun = () => {
    if (scrollRef.current) {
      const {scrollTo, scrollToEnd} = scrollRef.current;
      show ? scrollTo({y: 0, animated: true}) : scrollToEnd({animated: true});
    }
    toggleProfile();
  };

  const progress = useDerivedValue(() => {
    return show ? withTiming(1) : withTiming(0);
  });

  const menuStyles = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      transform: [{scaleY}],
    };
  });

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [-200, 0]);
    return {
      transform: [{translateX}],
    };
  });
  const viewStyles2 = (type: string) =>
    useAnimatedStyle(() => {
      const val = type === 'top' ? -100 : 100;
      const translateY = interpolate(drawerProgress.value, [0, 1], [val, 0]);
      const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
      return {
        transform: [{translateY}],
        opacity,
      };
    });
  return (
    <View style={[styles.container]}>
      {/* header */}
      <Animated.View
        style={[styles.row, styles.view, styles.marginTop, viewStyles2('top')]}>
        <View style={styles.iconContainer}>
          <Icon
            name={'cruelty-free'}
            size={38}
            type={Icons.MaterialIcons}
            color={colors.light}
            style={undefined}
          />
        </View>
        <Text style={styles.headerTitle}>Hello there!</Text>
      </Animated.View>
      {/* Drawer List Item */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        {...props}
        style={[styles.marginVertical, viewStyles]}>
        <View style={[styles.view]}>
          {state.routes.map(
            (
              route: {key: string | number; name: any},
              index: React.Key | null | undefined,
            ) => {
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
              const color = isFocused ? colors.dark : colors.darkGray;
              const drawerItem = options.item;
              const activeItemColor = isFocused ? colors.primary : null;
              return (
                <DrawerItem
                  key={index}
                  label={drawerItem.label}
                  tabBarTestID={options.tabBarTestID}
                  onPress={onPress}
                  name={drawerItem.icon}
                  type={drawerItem.type}
                  notification={drawerItem.notification}
                  color={color}
                  activeItemColor={activeItemColor}
                />
              );
            },
          )}
          <Categories />
        </View>
      
        {/* <DrawerItemList {...props} /> */}
        {/* 2nd Menu */}
        <View style={[styles.view, styles.marginVertical]}>
          <Text style={{color: '#333'}}>Project 3</Text>
          <View style={styles.separator} />
          {ProjectsArray.map((_, i) => (
            <ProjectItem
              key={i}
              label={_.title}
              type={_.iconType}
              color={_.color}
              name={_.icon}
              activeItemColor={''}
              onPress={() => console.log()}
            />
          ))}
        </View>
        {/* profile menu */}
        <Animated.View
          style={[styles.view, {backgroundColor: colors.primary}, menuStyles]}>
          <Text style={{color: colors.dark}}>Debabrata Giri</Text>
          <Text style={{color: colors.dark}}>debabratagiri5525@gmail.com</Text>

          <View style={styles.separator} />
          {ProfileMenu.map((_, i) => (
            <ProfileMenuItem
              key={i}
              label={_.label}
              type={_.iconType}
              color={'#333'}
              name={_.icon}
              onPress={() => console.log()}
            />
          ))}
        </Animated.View>
      </Animated.ScrollView>

      {/* footer */}
      <TouchableOpacity onPress={fun}>
        <Animated.View
          style={[
            styles.row,
            styles.view,
            styles.marginBottom,
            viewStyles2('bottom'),
          ]}>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://instagram.fbbi2-2.fna.fbcdn.net/v/t51.2885-19/293364187_565805618365740_820940581388127509_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbbi2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=bM3jYCPo2FUAX8EuAYc&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCawVIXyljE8T8lqufw5GMvBgMhmt9wxzYGnNVmiE_GNQ&oe=64FFEEA7&_nc_sid=ee9879',
            }}
          />
          <View>
            <Text style={styles.headerTitle}>Debabrata</Text>
            <Text style={styles.text}>Software Engineer</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
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
  text: {
    color: colors.dark,
  },
});
