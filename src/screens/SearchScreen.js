// SearchScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import tripsData from '../services/data/trips.json';
import { useNavigation } from '@react-navigation/native'; 

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); // Initialize useNavigation

  // Filter cruises based on the search query
  const filteredCruises = tripsData.flatMap(cruiseLine =>
    cruiseLine.cruises.filter(cruise =>
      cruise.destination.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('CruiseDetails', { cruiseLine: item.cruiseLine }) // Pass the cruiseLine
      }
    >
      <Text>{item.destination} - {item.depart}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Cruises"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredCruises}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.cruiseLine}-${item.depart}-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  searchInput: {
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchScreen;