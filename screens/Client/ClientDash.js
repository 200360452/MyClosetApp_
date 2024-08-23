import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ClientDash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Closet</Text>
      <Button
        title="Shop Now"
        onPress={() => navigation.navigate('ShopScreen')}
      />
      <Button
        title="View Cart"
        onPress={() => navigation.navigate('CartScreen')}
      />
      <Button
        title="Checkout"
        onPress={() => navigation.navigate('CheckoutScreen')}
      />
      <Button
        title="Order Status"
        onPress={() => navigation.navigate('ThankYouScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ClientDash;
