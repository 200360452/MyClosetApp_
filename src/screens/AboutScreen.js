/** screens/AboutScreen.js  */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const AboutScreen = () => {
  const handleContactPress = () => {
    Linking.openURL('mailto:200360452@edu.clg.qc.ca');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About MyClosetApp</Text>
      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.text}>
        Welcome to MyClosetApp! Developed as part of the Dev. App Multiplatform/Mobile program at CLG,
        this app is custom-designed for Chiic Happens, an online thrift shop specializing in women's fashion
        on platforms like Poshmark. Our goal is to modernize and streamline inventory and sales management
        through a tailored digital solution.
      </Text>
      
      <Text style={styles.sectionTitle}>Features and Objectives</Text>
      
      <Text style={styles.featureTitle}>1. Efficient Inventory Management</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Objective:</Text> Simplify item listing and tracking.
        {'\n'}<Text style={styles.bold}>Feature:</Text> Integrated QR code system for stock management.
        {'\n'}<Text style={styles.bold}>Frameworks:</Text> Expo-React Native, Expo-SQLite, QR Code libraries.
      </Text>
      
      <Text style={styles.featureTitle}>2. Optimized Operations</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Objective:</Text> Reduce repetitive tasks and manage the virtual closet directly.
        {'\n'}<Text style={styles.bold}>Feature:</Text> Bulk product addition and simplified crossposting process.
        {'\n'}<Text style={styles.bold}>Frameworks:</Text> React Navigation, Expo-ImagePicker, FlatList, Pressable.
      </Text>
      
      <Text style={styles.featureTitle}>3. Improved Sales Management</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Objective:</Text> Enhance the customer experience with easy product management and checkout.
        {'\n'}<Text style={styles.bold}>Feature:</Text> User-friendly interface for viewing product details, adding items to cart, and completing purchases.
        {'\n'}<Text style={styles.bold}>Frameworks:</Text> React Native components, Expo-SQLite, Custom Modals.
      </Text>
      
      <Text style={styles.sectionTitle}>Contact</Text>
      <TouchableOpacity onPress={handleContactPress}>
        <Text style={styles.contactText}>Valérie Dupuy</Text>
        <Text style={styles.contactText}>Email: 200360452@edu.clg.qc.ca</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  contactText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AboutScreen;
