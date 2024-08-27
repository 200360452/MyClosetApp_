// src/App.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import OpeningScreen from './src/screens/OpeningScreen'; 
import Loader from './src/components/Loader'; 
import { initializeDatabase } from './src/services/data/db'; // Ensure db.js is correctly imported

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Initialize database in the background
    initializeDatabase();

    // Show loader for a short duration and then display the opening screen
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Duration for the loader

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <View style={styles.container}>
      {showLoader ? <Loader /> : <OpeningScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
