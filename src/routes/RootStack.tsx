import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from './AuthStack';
import DrawerStack from './DrawerStack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const token = useSelector(
    (state: RootState) => state.authReducer.createProfile.token,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'fade', headerShown: false}}>
        {token.length === 0 ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="DrawerStack" component={DrawerStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
