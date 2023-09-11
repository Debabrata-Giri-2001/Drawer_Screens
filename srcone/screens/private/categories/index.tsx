import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useReducer, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, constant} from '../../../constant/Colors';
import {TouchableOpacity} from 'react-native';
import Styles from '../../../styles';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const index: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const showAnimatedView = useSharedValue(false);


  const color = isFocused ? colors.dark : colors.darkGray;
  const activeItemColor = isFocused ? colors.primary : null;

  const fun = () => {
    showAnimatedView.value = !showAnimatedView.value;
  };

  const animatedViewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      showAnimatedView.value,
      [0, 1],
      [0, 1],
      Easing.ease
    );

    return {
      opacity,
      height: withSequence(
        // Start with opacity animation
        withTiming(showAnimatedView.value ? 1 : 0, { duration: 150 }),
        // Then animate the height
        withSpring(showAnimatedView.value ? 120 : 0)
      ),
    };
  });

  return (
    <>
      <TouchableOpacity
        onPress={fun}
        style={[
          styles.drawerItem,
          activeItemColor ? {backgroundColor: activeItemColor} : null,
        ]}>
        <View style={Styles.rowView}>
          <Icon name="category" size={24} color={colors.darkGray} />
          <Text style={[styles.label, {color}]}>Category</Text>
        </View>
        <View
          style={[
            styles.notificationBadge,
            {
              backgroundColor: colors.light,
            },
          ]}>
          <Icon name="arrow-drop-down" size={24} color={colors.active} />
        </View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.view,
          {backgroundColor: colors.primary},
          animatedViewStyle,
        ]}>
        <TouchableOpacity>
          <Text style={styles.dropDownText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.dropDownText}>Public</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.dropDownText}>Private</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.dropDownText}>Custom</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: constant.SPACING / 2,
    justifyContent: 'space-between',
    borderRadius: constant.borderRadius,
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
  view: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  dropDownText: {
    color: colors.dark,
    fontSize: 18,
  },
});
