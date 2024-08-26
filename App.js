// src/App.js
import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { useAuth } from './hooks/useAuth'; // Import the custom auth hook
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Import AppNavigator
import AuthNavigator from './navigation/AuthNavigator'; // Import AuthNavigator (for login/signup)
import ThemeToggle from './components/common/ThemeToggle'; // Import ThemeToggle component
import LanguageSwitch from './components/common/LanguageSwitch'; // Import LanguageSwitch component
import styles from './styles/globalStyles'; // Import global styles

const App = () => {
  const { user, loading, error, skipAuth } = useAuth(); // Destructure user and auth functions from the hook

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>Error: {error}</Text>
        <Button title="Retry" onPress={() => { /* Retry logic */ }} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        {/* Place ThemeToggle and LanguageSwitch components */}
        <ThemeToggle />
        <LanguageSwitch />
        {user ? (
          <AppNavigator user={user} />
        ) : (
          <AuthNavigator onSkip={() => skipAuth()} />
        )}
      </View>
    </NavigationContainer>
  );
};

export default App;
