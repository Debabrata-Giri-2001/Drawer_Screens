import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from './srcone/routes/Routes';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {/* <Routes /> */}
        <Routes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
