// components/ThemeToggle.js
import React, { useContext } from 'react';
import { Switch, View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View>
      <Text>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

export default ThemeToggle;
