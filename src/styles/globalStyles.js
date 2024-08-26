// src/styles/globalStyles.js
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  orangeBackground: {
    backgroundColor: '#FFA500', // Orange background color
  },
  lightText: {
    color: '#D3D3D3', // Very light grey text
  },
  logo: {
    width: 150, // Adjust logo size
    height: 150,
    marginBottom: 20, // Space between logo and text
  },
});

export default globalStyles;
