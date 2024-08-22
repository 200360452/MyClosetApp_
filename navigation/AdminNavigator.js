/**navigation/AdminNavigator.js
 * Stack navigation for Admin functionalities, including product management and warehouse maps.
 * Handles the main navigation, including the login screen and bottom tab navigation.
 * Switches between AdminNavigator and ClientNavigator based on user role.
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ManageProducts from '../screens/Admin/ManageProducts';
import Dashboard from '../screens/Admin/Dashboard';
import WarehouseMap from '../screens/Admin/WarehouseMap';

const AdminStack = createStackNavigator();

const AdminNavigator = () => (
  <AdminStack.Navigator>
    <AdminStack.Screen name="Dashboard" component={Dashboard} />
    <AdminStack.Screen name="ManageProducts" component={ManageProducts} />
    <AdminStack.Screen name="WarehouseMap" component={WarehouseMap} />
  </AdminStack.Navigator>
);

export default AdminNavigator;
