// components/ThemeToggle.js
import React from 'react';
import { Button, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme'; // Import custom hook

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Use custom hook for theme

  return (
    <View>
      <Button title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`} onPress={toggleTheme} />
    </View>
  );
};

export default ThemeToggle;

