/** screens/Client/CheckOutScreen.js 
 * 
 * Client sees a detailed list of their order (from the cart), billing information x shipping
 * Sales taxes shipping costs calculated by billing address/province taxes rates (component), 
 * Shipping costs calculated by the shipping address x closest warehouse (available items). 
 * Client can opt for "Curbside pickup" and have a time slot suggested to come pick up their order in the 
 * Closest warehouse. 
 */

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button, Picker, Alert } from 'react-native';
import { db } from '../data/db';  // Import your database connection
import { calculateSalesTax, calculateShippingCost, suggestPickupTime } from '../utils/calculations'; // Assume these utility functions are implemented

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems } = route.params;  // Cart items passed from previous screen
  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [pickupTime, setPickupTime] = useState('');
  const [curbsidePickup, setCurbsidePickup] = useState(false);

  useEffect(() => {
    if (billingAddress && shippingAddress) {
      // Calculate costs when addresses are provided
      const tax = calculateSalesTax(totalCost, billingAddress);
      const shipping = calculateShippingCost(shippingAddress, cartItems);
      setSalesTax(tax);
      setShippingCost(shipping);
      setTotalCost(totalCost + tax + shipping);
    }
  }, [billingAddress, shippingAddress, cartItems, totalCost]);

  useEffect(() => {
    if (curbsidePickup) {
      // Suggest pickup time if curbside pickup is selected
      const suggestedTime = suggestPickupTime();
      setPickupTime(suggestedTime);
    }
  }, [curbsidePickup]);

  const handleCheckout = () => {
    // Implement checkout process (e.g., save order to database)
    Alert.alert('Order placed!', 'Thank you for your purchase.');
    navigation.navigate('ThankYouScreen', { orderId: '12345' });  // Navigate to thank you screen with a sample order ID
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Total: ${item.price * item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      <TextInput
        placeholder="Billing Address"
        value={billingAddress}
        onChangeText={setBillingAddress}
        style={styles.input}
      />

      <TextInput
        placeholder="Shipping Address"
        value={shippingAddress}
        onChangeText={setShippingAddress}
        style={styles.input}
      />

      <Text>Sales Tax: ${salesTax.toFixed(2)}</Text>
      <Text>Shipping Cost: ${shippingCost.toFixed(2)}</Text>
      <Text>Total Cost: ${totalCost.toFixed(2)}</Text>

      <View style={styles.curbsideContainer}>
        <Text>Curbside Pickup:</Text>
        <Picker
          selectedValue={curbsidePickup}
          onValueChange={(itemValue) => setCurbsidePickup(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="No" value={false} />
          <Picker.Item label="Yes" value={true} />
        </Picker>
        {curbsidePickup && (
          <Text>Suggested Pickup Time: {pickupTime}</Text>
        )}
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Button title="Place Order" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginBottom: 10,
  },
  curbsideContainer: {
    marginVertical: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
