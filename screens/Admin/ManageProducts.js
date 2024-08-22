// screens/Admin/ManageProducts.js

/**
 * Add, update, and delete products.
 * Bulk upload and future integrations.
*/

import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Alert, Image } from 'react-native';
import { getProducts, addProduct, deleteProduct } from '../../data/product'; // Adjust the path as needed
import ProductItem from '../../components/ProductItem';
import ProductForm from '../../components/ProductForm';
import ImagePickerButton from '../../components/ImagePickerButton';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getProducts((error, products) => {
      if (error) {
        console.log('Error fetching products:', error);
      } else {
        setProducts(products);
      }
    });
  };

  const handleAddProduct = () => {
    const { name, description, price } = newProduct;
    addProduct(name, description, price, selectedImage, (error) => {
      if (error) {
        console.log('Error adding product:', error);
      } else {
        fetchProducts(); // Refresh the product list
        setNewProduct({ name: '', description: '', price: '' });
        setSelectedImage(null);
      }
    });
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId, (error) => {
      if (error) {
        console.log('Error deleting product:', error);
      } else {
        fetchProducts(); // Refresh the product list
      }
    });
  };

  const handleImagePicked = (uri) => {
    setSelectedImage(uri);
    setNewProduct(prev => ({ ...prev, image: uri }));
  };

  const renderItem = ({ item }) => (
    <ProductItem
      item={item}
      onDelete={handleDeleteProduct}
      onUpdate={() => Alert.alert('Update Product', 'Functionality to update a product')}
    />
  );

  return (
    <View style={styles.container}>
      <ImagePickerButton onImagePicked={handleImagePicked} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <ProductForm
        newProduct={newProduct}
        onChange={(field, value) => setNewProduct(prev => ({ ...prev, [field]: value }))}
        onSubmit={handleAddProduct}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default ManageProducts;
