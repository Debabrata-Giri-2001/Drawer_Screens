import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerScreens from './DrawerScreens';
import {AllNews, IndiaNews, OdishaNews} from '../../screens/private/news';
import {ChangeTheme, NotifyMe} from '../../screens/private/settings';
import {Code, Eat, Sleep} from '../../screens/private/todos';
import {RootStackPramList} from '../../types';

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
        <Stack.Screen
          name="All"
          component={AllNews}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="India"
          component={IndiaNews}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Odisha"
          component={OdishaNews}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Change_Theme"
          component={ChangeTheme}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="NotifyMe"
          component={NotifyMe}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Code"
          component={Code}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Eat"
          component={Eat}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Sleep"
          component={Sleep}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
