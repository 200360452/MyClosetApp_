import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = ({ onSkip }) => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="Skip"
      component={() => {
        onSkip();
        return null; // Redirects to AppNavigator on skip
      }}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
