// screens/Client/ThankYouScreen.js 

/** Once checkout completed, client sees this screen for tracking #order and status
 * Like Uber to check if order arrives or what stage it is at
 * Interacts with warehouses/locations.json to establish an itinary with client's address/location. 
 */

import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThankYouScreen = ({ route }) => {
  const { orderNumber } = route.params;
  const navigation = useNavigation();

  const handleRefresh = () => {
    // Refresh order status logic
  };

  const handleContactUs = () => {
    // Contact us logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You for Your Purchase!</Text>
      <Text>Order Number: {orderNumber}</Text>
      <View style={styles.statusContainer}>
        {/* Replace with animated icons or status indicators */}
        <Image source={{ uri: 'status_icon_url' }} style={styles.statusIcon} />
        <Text>Order Status: Preparing</Text>
      </View>
      <Button title="Contact Us" onPress={handleContactUs} />
      <Button title="Call Us" onPress={() => { /* Call logic */ }} />
      <Button title="Refresh Status" onPress={handleRefresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  statusContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  statusIcon: {
    width: 50,
    height: 50,
  },
});

export default ThankYouScreen;
