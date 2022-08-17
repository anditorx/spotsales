import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {Home, Login, Splash} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function MainTab() {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="Donate"
//         component={Donate}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// }

const Routes = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={'SPLASH'}
        component={Splash}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name={'LOGIN'}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
