// src/screens/OpeningScreen.js
import React from 'react';
import { View, Animated, Easing, StyleSheet, Image } from 'react-native';

const OpeningScreen = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/favicon.png')}
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Orange background
  },
  logo: {
    width: 150,
    height: 150,
    tintColor: '#D3D3D3', // Light grey logo color
  },
});

export default OpeningScreen;
