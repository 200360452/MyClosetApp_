/**navigation/AdminNavigator.js
 * Stack navigation for Client functionalities, including produStack navigation for Client functionalities, including viewing products, managing the cart, shipping/curbside pickup (warehouses/locations/maps) and checking out.  
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '../screens/Client/ProductList';
import ProductDetail from '../screens/Client/ProductDetail';
import Cart from '../screens/Client/Cart';
import Checkout from '../screens/Client/Checkout'; // Assuming you have a Checkout screen

const ClientStack = createStackNavigator();

const ClientNavigator = () => (
  <ClientStack.Navigator>
    <ClientStack.Screen name="ProductList" component={ProductList} />
    <ClientStack.Screen name="ProductDetail" component={ProductDetail} />
    <ClientStack.Screen name="Cart" component={Cart} />
    <ClientStack.Screen name="Checkout" component={Checkout} />
  </ClientStack.Navigator>
);

export default ClientNavigator;
