import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../../components/containers/CustomDrawerContent';
import {drawerMenu} from '../../constant';
import {Home, Notifications} from '../../screens/private';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackPramList} from '../../types';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
  //type of screens
  const navigation = useNavigation<StackNavigationProp<RootStackPramList>>();
  // position of index
  const [menuIndex, setMenuIndex] = useState(-1);
  const [opened, setOpened] = useState<boolean>(false);

  //Animation value
  const animation = useRef(new Animated.Value(0)).current;

  //Animation duration and opened value
  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  return (
    // Drawer Navigator
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#caf0f8',
        drawerActiveTintColor: '#03045e',
        drawerInactiveTintColor: '#03045e',
        drawerLabelStyle: {
          fontSize: 18,
          padding: 4,
          marginLeft: -10,
        },
      }}
      // Drawer Content
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View style={styles.DrawerContent}>
              {/*Custom inside Drawer Content  */}
              <CustomDrawerContent />
            </View>
            {/* DrawerItem List get through props*/}
            <DrawerItemList {...props} />
            {/* Get  DrawerMenu item through map*/}
            {drawerMenu.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={index}
                  onPress={() => {
                    LayoutAnimation.configureNext(
                      LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
                    );
                    setMenuIndex(menuIndex === index ? -1 : index);
                    setOpened(menuIndex === index ? true : false);
                  }}>
                  <View style={[styles.ItemTitle]}>
                    <View style={styles.dropDownStyle}>
                      <Image
                        style={{marginRight: 18}}
                        tintColor={'#00b4d8'}
                        height={24}
                        width={24}
                        source={{uri: item.titleIcon}}
                      />
                      <Text
                        style={[
                          styles.Title,
                          {
                            color: menuIndex === index ? '#234E70' : '#234E70',
                          },
                        ]}>
                        {item.title}
                      </Text>
                    </View>
                    <Animated.View
                      style={{
                        transform: [
                          {
                            rotate: animation.interpolate({
                              inputRange: [0, 1],
                              outputRange:
                                menuIndex == index
                                  ? ['180deg', '0deg']
                                  : ['0deg', '0deg'],
                            }),
                          },
                        ],
                      }}>
                      <Image
                        tintColor={'#0077b6'}
                        height={24}
                        width={24}
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/32/32195.png',
                        }}
                      />
                    </Animated.View>
                  </View>
                  {/* Get  Submenu from DrawerMenu  item through map*/}
                  {menuIndex === index && (
                    <View
                      style={[
                        styles.subMenuStyle,
                        {backgroundColor: '#90e0ef'},
                      ]}>
                      {item.menuList.map((subMenu, index) => (
                        <TouchableOpacity
                          onPress={() => {
                            const screenName = subMenu.title as keyof RootStackPramList;
                            navigation.navigate(screenName);
                          }}>
                          <View
                            style={{
                              backgroundColor: '#caf0f8',
                              margin: 4,
                              padding: 1,
                              borderRadius:8
                            }}>
                            <Text
                              style={[styles.submenuTitle, {color: '#03045e'}]}>
                              {subMenu.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </SafeAreaView>
        );
      }}>
      {/* Drawer Screens Home*/}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => (
            <View>
              <Image
                tintColor={'#00b4d8'}
                height={20}
                width={20}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png',
                }}
              />
            </View>
          ),
        }}
      />
      {/* Drawer Screens Notification*/}
      <Drawer.Screen
        name="Notification"
        component={Notifications}
        options={{
          drawerIcon: () => (
            <View>
              <Image
                tintColor={'#00b4d8'}
                height={20}
                width={20}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3602/3602123.png',
                }}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;

// Style StyleSheet
const styles = StyleSheet.create({
  DrawerContent: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#caf0f8',
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    elevation: 4,
  },
  ItemTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    padding: 12,
    borderRadius: 4,
  },
  dropDownStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    fontSize: 18,
    margin: 2,
    fontWeight: '800',
  },
  subMenuStyle: {
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 12,
  },
  submenuTitle: {
    margin: 6,
    fontSize: 17,
    fontWeight: '800',
  },
});
