// screens/Admin/AdminScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AdminScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Button
        title="Manage Products"
        onPress={() => navigation.navigate('ManageProducts')}
      />
      {/* You can add more buttons here for additional admin functions */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default AdminScreen;
