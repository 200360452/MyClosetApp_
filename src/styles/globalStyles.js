// styles/global.js
// src/styles/globalStyles.js

import { StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import the icons you'll use

// Define light and dark themes
export const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#000000',
};

export const darkTheme = {
  backgroundColor: '#000000',
  color: '#ffffff',
};

// Export icon components for use in your app
export const IconComponents = {
  Ionicons,
  MaterialIcons,
  // Add more icon libraries as needed
};

// Global styles for the app
const globalStyles = StyleSheet.create({
  // Container style for most screens
  container: {
    flex: 1,
    padding: 16,
  },
  // General text styling
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular', // Ensure custom font is properly linked
  },
  // Background styles for light and dark themes
  lightBackground: {
    backgroundColor: lightTheme.backgroundColor,
  },
  darkBackground: {
    backgroundColor: darkTheme.backgroundColor,
  },
  lightText: {
    color: lightTheme.color,
  },
  darkText: {
    color: darkTheme.color,
  },
  // Modal container style
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Modal background
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
});

export default globalStyles;
