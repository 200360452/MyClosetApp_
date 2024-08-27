// src/components/Common/ThemeToggle.js
import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        thumbColor={isDarkMode ? '#fff' : '#000'}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
  },
});

export default ThemeToggle;
