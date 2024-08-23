/**navigation/AdminNavigator.js
 * Stack navigation for Client functionalities, including produStack navigation for Client functionalities, including viewing products, managing the cart, shipping/curbside pickup (warehouses/locations/maps) and checking out.  
 * 
 * 
*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClientDash from '../Client/ClientDash';
import ShopScreen from '../Client/ShopScreen';
import CartScreen from '../Client/CartScreen';
import CheckoutScreen from '../Client/CheckoutScreen';
import ThankYouScreen from '../Client/ThankYouScreen';

const Stack = createStackNavigator();

const ClientStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ClientDash">
      <Stack.Screen name="ClientDash" component={ClientDash} />
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
    </Stack.Navigator>
  );
};

export default ClientStackNavigator;
