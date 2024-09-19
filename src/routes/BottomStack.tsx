import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home/Home';
import Notifications from '../screens/notifications/Notifications';
import Profile from '../screens/profile/Profile';
import MyMenu from '../screens/myMenu/MyMenu';

export type BottomStackParam = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  MyMenu: undefined;
};

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="MyMenu" component={MyMenu} />
    </Tab.Navigator>
  );
};

export default BottomStack;
