/** /screens/HomeScreen.js
 */
// src/screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { getProducts } from '../services/product';
import SearchBar from '../components/common/SearchBar';
import { addToCart } from '../services/cart'; // Import cart functions

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    // Add item to cart (local storage or state management)
    await addToCart(productId);
    // Optionally, show a confirmation or feedback
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item.id)} />
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { id: item.id })}>
              <Text>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('CartScreen')} />
    </View>
  );
};

export default HomeScreen;
