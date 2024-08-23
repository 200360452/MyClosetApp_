import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ProductItem = ({ item, onDelete, onUpdate }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text>{item.description}</Text>
    <Text>${item.price.toFixed(2)}</Text>
    {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
    <Button title="Delete" onPress={() => onDelete(item.id)} />
    <Button title="Update" onPress={() => onUpdate(item.id)} />
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default ProductItem;
