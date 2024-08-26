// src/App.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import OpeningScreen from './screens/OpeningScreen';
import { initializeDatabase } from './data/db';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { useAuth } from './hooks/useAuth'; // Custom hook for authentication

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, loading, error, skipAuth } = useAuth(); // Destructure user and auth functions

  useEffect(() => {
    const setupApp = async () => {
      try {
        await initializeDatabase();
      } catch (error) {
        console.error('Failed to initialize the database:', error);
      } finally {
        setIsLoading(false);
      }
    };

    setupApp();
  }, []);

  if (isLoading || loading) {
    return <OpeningScreen />;
  }

  if (error) {
    // Handle error case
    return <View><Text>Error: {error}</Text></View>;
  }

  return (
    <NavigationContainer>
      {user ? (
        <AppNavigator user={user} />
      ) : (
        <AuthNavigator onSkip={() => skipAuth()} />
      )}
    </NavigationContainer>
  );
};

export default App;
