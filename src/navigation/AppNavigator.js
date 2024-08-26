/**navigation/AppNavigator.js
 * Handles the main navigation, including the login screen and bottom tab navigation.
 * Switches between AdminNavigator and ClientNavigator based on user role.
*/
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProductListScreen from '../screens/ProductListScreen';
import { useTheme } from '../hooks/useTheme';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useTheme(); // Custom hook to get the theme

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background,
        },
        headerStyle: {
          backgroundColor: theme.headerBackground,
        },
        headerTintColor: theme.headerTextColor,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Products" component={ProductListScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
