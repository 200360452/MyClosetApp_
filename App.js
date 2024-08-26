// src/App.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import OpeningScreen from './components/OpeningScreen'; // Adjust the path if needed
import Loader from './components/Loader'; // Adjust the path if needed
import { initializeDatabase } from './data/db'; // Ensure this import works

const App = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Trigger database initialization
    initializeDatabase();

    // Show loader after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!showLoader ? <OpeningScreen /> : <Loader />}
    </View>
  );
};

export default App;
