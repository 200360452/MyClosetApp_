/**navigation/AppNavigator.js
 * Handles the main navigation, including the login screen and bottom tab navigation.
 * Switches between AdminNavigator and ClientNavigator based on user role.
*/
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { getUser } from '../data/user'; // Adjust the path as needed

import LoginScreen from '../screens/Main/LoginScreen';
import AdminNavigator from './AdminNavigator';
import ClientNavigator from './ClientNavigator';

const BottomTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const AppNavigator = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user info (for demo purposes, hardcoded values)
    getUser('someUsername', 'somePassword', (error, user) => {
      if (error) {
        console.log('Error fetching user:', error);
      } else {
        setUser(user);
      }
    });
  }, []);

  const BottomTabNavigator = () => (
    <BottomTab.Navigator>
      {user.admin ? (
        <BottomTab.Screen
          name="Admin"
          component={AdminNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <BottomTab.Screen
          name="Client"
          component={ClientNavigator}
          options={{ headerShown: false }}
        />
      )}
    </BottomTab.Navigator>
  );

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {user ? (
          <AuthStack.Screen
            name="Main"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <AuthStack.Screen name="Login" component={LoginScreen} />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
