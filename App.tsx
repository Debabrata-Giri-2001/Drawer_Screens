import React from 'react';
import Routes from './src/routes/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
