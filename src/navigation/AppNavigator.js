/**navigation/AppNavigator.js
 * Handles the main navigation, including the login screen and bottom tab navigation.
 * Switches between AdminNavigator and ClientNavigator based on user role.
*/
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AdminNavigator from './AdminNavigator';
import ClientNavigator from './ClientNavigator';

const BottomTab = createBottomTabNavigator();

const AppNavigator = ({ user }) => {
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

  return <BottomTabNavigator />;
};

export default AppNavigator;
