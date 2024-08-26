// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAllProducts } from './src/services/data/product';
import { getAllUsers } from './src/services/data/user';

export default function App() {
  // Sample state variables to hold data
  const [products, setProducts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  // Fetch products and users when the component mounts
  React.useEffect(() => {
    // Fetch products
    getAllProducts((error, data) => {
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
      }
    });

    // Fetch users
    getAllUsers((error, data) => {
      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setUsers(data);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Products:</Text>
      {products.map(product => (
        <Text key={product.id}>{product.name} - ${product.price}</Text>
      ))}
      <Text>Users:</Text>
      {users.map(user => (
        <Text key={user.id}>{user.name} - {user.email}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
