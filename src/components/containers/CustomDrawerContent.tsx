import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const CustomDrawerContent = () => {
  return (
    <View style={styles.container}>
      <Image
        height={80}
        width={80}
        borderRadius={100}
        source={{
          uri: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg',
        }}
      />
      <Text style={styles.name}>Debabrata Giri</Text>
      <Text style={styles.age}>Age: 22</Text>

    </View>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
  container:{
    padding:8,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#023047',
  },
  age:{
    fontSize: 16,
    fontWeight: '800',
    color: '#023047',
  }
});
