// src/screens/OpeningScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import globalStyles from '../styles/globalStyles';
import logo from '../assets/logo.png'; 

const OpeningScreen = () => {
  return (
    <View style={[styles.container, globalStyles.lightBackground]}>
      <Image source={logo} style={styles.logo} />
      <ActivityIndicator size="large" color={globalStyles.lightText.color} />
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
});

export default OpeningScreen;
