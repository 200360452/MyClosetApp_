// src/screens/OpeningScreen.js
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { initializeDatabase } from '../data/db'; // Ensure the path to db.js is correct

const OpeningScreen = ({ navigation }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Initialize the database
    initializeDatabase();

    // Show loader after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(true);
      // Navigate to the next screen after loader
      navigation.replace('HomeScreen'); // Replace 'HomeScreen' with your actual next screen name
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!showLoader ? (
        <Image 
          source={require('../assets/favicon.png')} // Ensure the path to your favicon.png is correct
          style={styles.logo}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" /> // Show loader while transitioning
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange', // Orange background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default OpeningScreen;
