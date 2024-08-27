//hooks/UseTheme.js 

import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useTheme = () => {
  const [theme, setTheme] = useState('light'); 
  
  // Load the theme from storage or system preference on mount
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const systemTheme = Appearance.getColorScheme(); // Get system theme
        setTheme(systemTheme || 'light');
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme); // Save the selected theme
  };

  return {
    theme,
    toggleTheme,
  };
};
