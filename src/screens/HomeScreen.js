// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import HeroBanner from '../components/Common/HeroBanner'; // Hero carousel component
import InputField from '../components/Common/InputField'; 
import SearchBar from '../components/Search/SearchBar'; // Search bar component
import ProductList from '../components/Shopping/ProductList'; // Component to display complete list of product, organized by default by the most recent
import ProductDetail from '../components/Shopping/ProductDetail'; // Component to display individual product
import { useTheme } from '../hooks/useTheme'; // Custom hook to get the theme

const HomeScreen = () => {
  const { theme } = useTheme(); // Custom hook to get the theme

  // Replace with actual data fetching logic
  const products = []; // Fetch from service or state

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <HeroBanner />
      
      {/* Search Section */}
      <View style={styles.searchSection}>
        <Button title="Filter" onPress={() => { /* Filter action */ }} />
        <SearchBar />
        <InputField placeholder="Search..." />
      </View>

      {/* Product List */}
      <View style={styles.productList}>
        {products.length > 0 ? (
          products.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <Text>No products available</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    padding: 16,
    backgroundColor: '#FFFFFF', // Adjust as needed
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  productList: {
    padding: 16,
  },
});

export default HomeScreen;
