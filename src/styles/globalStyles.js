// src/styles/globalStyles.js

import { StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// Define light and dark themes
export const lightTheme = {
  backgroundColor: '#f0f0f0', // Light background color
  color: '#333333', // Dark text color
};

export const darkTheme = {
  backgroundColor: '#333333', // Dark background color
  color: '#f0f0f0', // Light text color
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
    backgroundColor: 'transparent', // Background color to be handled by theme
  },
  // General text styling
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular', // Ensure custom font is properly linked
  },
  // Title text styling
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Button styles
  button: {
    backgroundColor: '#007bff', // Blue button background
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // White text on buttons
    fontSize: 16,
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
  // Link styles
  link: {
    color: '#007bff', // Blue color for links
    textDecorationLine: 'underline',
  },
});

export default globalStyles;
