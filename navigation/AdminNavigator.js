/**navigation/AdminNavigator.js
 * Stack navigation for Admin functionalities, including product management and warehouse maps.
*/

import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ManageProducts from '../screens/Admin/ManageProducts';
import { getCurrentUser } from '../data/user'; // Function to get current user info

const Stack = createStackNavigator();

const AdminNavigator = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the current user is an admin
    getCurrentUser(user => {
      setIsAdmin(user?.admin || false);
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="ManageProducts">
        {props => <ManageProducts {...props} isAdmin={isAdmin} />}
      </Stack.Screen>
      {/* Add other admin screens here */}
    </Stack.Navigator>
  );
};

export default AdminNavigator;
