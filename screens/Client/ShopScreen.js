// screens/Client/ShopScreen.js 

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { db } from '../data/db';  // Import your database connection

const ShopScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT id, name, description, price, image FROM product`,
        [],
        (tx, results) => {
          const rows = results.rows._array;
          setProducts(rows);
          setFilteredProducts(rows); // Set filtered products to the full list initially
        }
      );
    });
  }, []);

  useEffect(() => {
    // Filter products based on search term
    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search products"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>${item.price}</Text>
          </TouchableOpacity>
        )}
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShopScreen;
