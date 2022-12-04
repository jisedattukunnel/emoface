import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './style';
import COLOR from '../Config/COLOR';

import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import QuestionScreen from '../Screens/QuestionScreen';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import SuccessScreen from '../Screens/SuccessScreen';

const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{headerShadowVisible: false}}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'LoginScreen',
          headerStyle: styles.headerStyle,
          headerTintColor: COLOR.grey1,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      /> */}
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          title: 'Questions',
          headerStyle: styles.headerStyle,
          headerTintColor: COLOR.grey1,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default Route;
