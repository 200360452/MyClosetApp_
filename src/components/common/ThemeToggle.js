// components/ThemeToggle.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme'; 
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Button 
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} 
        onPress={toggleTheme} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ThemeToggle;

