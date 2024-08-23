import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProductForm = ({ newProduct, onChange, onSubmit }) => (
  <View style={styles.form}>
    <Text>Name:</Text>
    <TextInput
      style={styles.input}
      value={newProduct.name}
      onChangeText={text => onChange('name', text)}
    />
    <Text>Description:</Text>
    <TextInput
      style={styles.input}
      value={newProduct.description}
      onChangeText={text => onChange('description', text)}
    />
    <Text>Price:</Text>
    <TextInput
      style={styles.input}
      value={newProduct.price}
      keyboardType="numeric"
      onChangeText={text => onChange('price', text)}
    />
    <Button title="Add Product" onPress={onSubmit} />
  </View>
);

const styles = StyleSheet.create({
  form: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
  },
});

export default ProductForm;
