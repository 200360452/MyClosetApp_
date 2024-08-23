// screens/Client/CartScreen.js 

import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]); // Load cart items from state or storage
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = cartItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveItem = (id) => {
    // Remove item logic
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search items"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
          </View>
        )}
      />
      <Button
        title="Proceed to Checkout"
        onPress={() => navigation.navigate('CheckoutScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default CartScreen;
