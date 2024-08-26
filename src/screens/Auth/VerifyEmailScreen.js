// src/screens/Auth/VerifyEmailScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerifyEmailScreen = () => {
  const navigation = useNavigation();

  const handleVerifyEmail = () => {
    // Email verification logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      {/* Add email verification instructions */}
      <Button title="Verify Email" onPress={handleVerifyEmail} />
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
    marginBottom: 20,
  },
});

export default VerifyEmailScreen;
