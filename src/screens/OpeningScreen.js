// src/screens/OpeningScreen.js
// src/screens/OpeningScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import logo from '../assets/logo.png';

const OpeningScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('HomeScreen'); // Example: Navigate to HomeScreen
  };

  return (
    <View style={[styles.container, globalStyles.lightBackground]}>
      <Image source={logo} style={styles.logo} />
      <ActivityIndicator size="large" color={globalStyles.lightText.color} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OpeningScreen;
