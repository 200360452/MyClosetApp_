//Lina Jabbour
//Exemple 4 de React NativeDouble Navigation
//Bootom tab navigation et stack navigation
//Le 8 mai, 2024
// src/navigation/Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/Auth/AccountScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Contact" component={ContactScreen} />
  </Stack.Navigator>
);

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

export const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Home" 
      component={HomeStack}
      options={{
        tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
      }} 
    />
    <Tab.Screen 
      name="Search" 
      component={SearchScreen}
      options={{
        tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
      }} 
    />
    <Tab.Screen 
      name="Account" 
      component={AccountStack}
      options={{
        tabBarIcon: ({ size, color }) => <Ionicons name="person" size={size} color={color} />
      }} 
    />
  </Tab.Navigator>
);

/**
 * Stack Navigator Screens
const ParamHomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Wifi" onPress={() => navigation.navigate('Wifi')} />
    <Button title="Bluetooth" onPress={() => navigation.navigate('Bluetooth')} />
  </View>
);

const WifiParamScreen = () => (
  <View style={styles.container}>
    <Text>Wifi Settings</Text>
  </View>
);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{tabBarIcon: ({size, focused, color}) => <Ionicons name="home" size={size} color={color} />}} />
          <Tab.Screen name="Search" component={SearchScreen}
            options={{tabBarIcon: ({size, focused, color}) => <Ionicons name="search" size={size} color={color}/>}} />
          <Tab.Screen name="Parameters" component={ParamScreen}
            options={{tabBarIcon: ({size, focused, color}) => <Ionicons name="cog" size={size} color={color}/>}}
           />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
const HomeScreen = ({navigation}) => {
  return  <View>
    <Text>Home screen</Text>
  </View>
}
const ParamScreen = ({navigation}) => {
  return  <Stack.Navigator>
    <Stack.Screen name="ParamHome" component={ParamHomeScreen}/>
    <Stack.Screen name="Wifi" component={WifiParamScreen}/>
    <Stack.Screen name="Bluetooth" component={BluetoothParamScreen}/>
  </Stack.Navigator>
}

const ParamHomeScreen = ({navigation}) => {
  return <View>
    <Button title="Wifi" onPress={()=> navigation.navigate("Wifi")}/>
    <Button title="Bluetooth" onPress={()=> navigation.navigate("Bluetooth")}/>
  </View>
}

const WifiParamScreen = () => <Text>Wifi param</Text>
const BluetoothParamScreen = () => <Text>Bluetooth params</Text>

const SearchScreen = ({navigation, route}) => {
  return  <View>
    <Text>Search screen</Text>
  </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
