import React from 'react';
import { View, Text } from 'react-native';
import { headerStyles } from './headerStyles'; // Component-specific styles

const Header = () => (
  <View style={headerStyles.container}>
    <Text style={headerStyles.title}>Header</Text>
  </View>
);

export default Header;