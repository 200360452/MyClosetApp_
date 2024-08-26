// src/screens/Auth/AuthScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyClosetApp</Text>
      <Text style={styles.subtitle}>Please sign in or sign up, or continue as a guest.</Text>
      <Button
        title="Sign In"
        onPress={() => {
          // Add logic for navigating to Sign In screen
          navigation.navigate('SignIn'); // Replace with your actual sign-in screen name
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          // Add logic for navigating to Sign Up screen
          navigation.navigate('SignUp'); // Replace with your actual sign-up screen name
        }}
      />
      <Button
        title="Continue as Guest"
        onPress={() => navigation.replace('HomeScreen')} // Navigate to HomeScreen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default AuthScreen;
