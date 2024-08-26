// src/navigation/AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/Auth/SignInScreen'; // Import SignInScreen component
import SignUpScreen from '../screens/Auth/SignUpScreen'; // Import SignUpScreen component
import VerifyEmailScreen from '../screens/Auth/VerifyEmailScreen'; // Import VerifyEmailScreen component

const Stack = createStackNavigator();

const AuthNavigator = ({ onSkip }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
