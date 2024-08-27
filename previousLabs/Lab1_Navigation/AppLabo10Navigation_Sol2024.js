//Lina Jabbour
//KBC Labo10 Navigation 
//Solution 2024 v4

import {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import Ionicons from '@expo/vector-icons/Ionicons';
import voyages from './trips.json';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={HomeScreen}
          options={{tabBarIcon: ({focused}) => <Ionicons name="home" size={30}
          color={focused ? "blue" : "lightblue"}/>,
          headerTitle: (props) => <View/> }} />
        <Tab.Screen name="Recherche" component={SearchScreen}  
          options={{tabBarIcon: ({focused}) => <Ionicons name="search" size={30}
          color={focused ? "blue" : "lightblue"} />,
          headerTitle: (props) => <View/> }} />
        <Tab.Screen name="Croisières" component={CruiseScreen}  
          options={{tabBarIcon: ({focused}) => <Ionicons name="boat-sharp" size={30}
          color={focused ? "blue" : "lightblue"} />, headerTitle: (props) => <View/> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//PAGE D'ACCUEIL
const HomeScreen = () => {
  return( 
    <View style={{height:"100%"}}>
      <Text style={styles.titre}>Nos Croisières en Promotion</Text> 
      <FlatList data={voyages} 
       renderItem={({item})=> <Croisieres nomCroisiere={item.cruiseLine} croisiere={item.croisieres} afficherTout={false}/>}
       keyExtractor={(item,index) => index.toString()} />
    </View>)}
      
const Croisieres=({nomCroisiere, croisiere, afficherTout})=><View style={styles.ligneCroisiereView} >
  <Text style={styles.ligneCroisiere}>{nomCroisiere}</Text>
  {croisiere.map((v,k)=> afficherTout? <Text style={styles.voyage} key={k}>
    {`Destination: ${v.destination} \n départ de ${v.depart} \n  nombre de jours: ${v.nbreJours}`}</Text>:
    v.surPageAccueil? <Text style={styles.voyage} key={k}>
      {`Destination: ${v.destination} \n départ de ${v.depart}`}</Text>:null )}
  </View>


const SearchScreen = ({navigation})=> <View><Text style={styles.titre}>Page de Recherche</Text></View>

//PAGE de LIGNES DE CROISIERES
const CruiseScreen = ({navigation})=> {
  const Stack = createNativeStackNavigator();
  return( 
    <Stack.Navigator initialRouteName="CruiseLineScreen" screenOptions={{headerShown:true}}>
      <Stack.Screen name="CruiseLine" component={CruiseLineScreen} 
      options={{headerTitle: (props) =>
        <View style={{marginLeft:-15}}><Text style={styles.titre}>Nos Lignes de Croisières</Text></View>}} />
      <Stack.Screen name="Details" component={CruiseLineDetails} options={({route})=>({title:route.params.ligne})}/>
  </Stack.Navigator>)
}

const CruiseLineScreen = ({navigation})=> {return( 
  <View>
    <FlatList data={voyages} 
      renderItem={({item})=> <PressableCroisiere ligneCroisiere={item.cruiseLine} 
      croisières={item.croisieres} navig={navigation}/>} 
      keyExtractor={(item,index) => index.toString()} />
  </View>)}
  
  const PressableCroisiere = ({ligneCroisiere, croisières, navig})=> {
    return (
      <Pressable style={({pressed})=>pressed? [styles.pressable, styles.pressed]:styles.pressable}
      key={ligneCroisiere} 
      onPress={()=>navig.navigate("Details", {lesCroisieres: croisières, ligne:ligneCroisiere})} >
        <Text style={styles.voyage} >{ligneCroisiere}</Text>
    </Pressable>)
    }

  const CruiseLineDetails = ({navigation, route}) => {
    const {lesCroisieres, ligne} = route.params;
    console.log(ligne, lesCroisieres);
    return(<Croisieres nomCroisiere={ligne} croisiere={lesCroisieres}  afficherTout={true}/>)
  }

    const styles = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titre:{
      fontSize:35,
      color:'#fff',
      backgroundColor: '#38f'
    },
    ligneCroisiere:{
      backgroundColor: '#00f',
      color:'#fff',
      fontSize:30,
      padding:7,
      margin:7,
    },
   
    voyage:{
      color:'#00f',
      fontWeight:'bold',
      padding:4,
      margin:4,
      fontSize:15,
    },
    pressable: {
      backgroundColor: "#2be",
      padding : 6,
      margin : 4,
      borderRadius: 10
    },
    pressed: {
      backgroundColor: "#26e",
    },
  });