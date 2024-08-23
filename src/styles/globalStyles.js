// styles/global.js

import { StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import the icons you'll use

export const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#000000',
};

export const darkTheme = {
  backgroundColor: '#000000',
  color: '#ffffff',
};

export const IconComponents = {
  Ionicons,
  MaterialIcons,
  // Add more icon libraries as needed
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular', // Example of custom font
  },
  // Other global styles
});

export default globalStyles;

// Use the theme in your components
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SomeComponent = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <Text style={{ color: currentTheme.color }}>Hello, World!</Text>
    </View>
  );
};

