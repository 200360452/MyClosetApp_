// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './src/navigation/Navigation';
import { useTheme } from './src/hooks/useTheme';

export default function App() {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}

/**
 * 
// src/App.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import OpeningScreen from './src/screens/OpeningScreen'; 
import Loader from './src/components/Loader'; 
import { initializeDatabase } from './src/services/data/db'; // Ensure db.js is correctly imported

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Initialize database in the background
    initializeDatabase();

    // Show loader for a short duration and then display the opening screen
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Duration for the loader

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <View style={styles.container}>
      {showLoader ? <Loader /> : <OpeningScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
*/ 

/**
 * import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, FlatList, Alert } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Initialize SQLite database
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

// Define the bottom tab and stack navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Import screens
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SearchScreen from '../screens/SearchScreen';
import ContactScreen from '../screens/ContactScreen';
import AccountScreen from '../screens/AccountScreen'; 

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
          }} 
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen}
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
          }} 
        />
        <Tab.Screen 
          name="Account" 
          component={AccountScreen}
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name="person" size={size} color={color} />
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
