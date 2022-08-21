import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {Home, Login, Profile, Splash} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Akun"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

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
      {/* <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
