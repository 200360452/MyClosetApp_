//Lina Jabbour
//Labo de Navigation
//exercice 3
import {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import voyages from './trips.json';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
           <Tab.Screen name="Accueil" component={HomeScreen}
              options={{tabBarIcon: ({focused}) => <Ionicons name="home"  size={30} color={focused ? "blue" : "lightblue"} />}} />
           <Tab.Screen name="Recherche" component={SearchScreen}
              options={{tabBarIcon: ({focused}) => <Ionicons name="search" size={30}
              color={focused ? "blue" : "lightblue"} />}} />
            <Tab.Screen name="LignesCroisières" component={CruiseLineScreen}
              options={{tabBarIcon: ({focused}) => <Ionicons name="boat-sharp" size={30}
              color={focused ? "blue" : "lightblue"} />}} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

//PAGE D'ACCUEIL
const HomeScreen = () => {return( <View><Text style={styles.titre}>Nos Croisières en Promotion</Text> 
    <FlatList data={voyages} 
    renderItem={({item})=> <Voyage nomCroisiere={item.cruiseLine} croisiere={item.croisieres} />}
    keyExtractor={(item,index) => index.toString()} /></View>)}
      
const Voyage=({nomCroisiere, croisiere})=>  <View >
  <Text style={styles.ligneCroisiere}>{nomCroisiere}</Text>
  {croisiere.map((v,k)=> v.surPageAccueil? <Text style={styles.voyage} key={k}>
    {`Destination: ${v.destination} départ de ${v.depart} nombre de jours: ${v.nbreJours}` }
  </Text>:null)}
</View>

const SearchScreen = ({navigation})=> <View><Text style={styles.titre}>Page de Recherche</Text></View>

//PAGE de LIGNES DE CROISIERES
const CruiseLineScreen = ({navigation})=> {
  const [id, setId] = useState(-1);
  return( 
  <View>
    <Text style={[styles.ligneCroisiere, styles.titre]}>Nos Lignes de Croisières</Text> 
    <FlatList data={voyages} 
      renderItem={({item})=> <PressableCroisiere ligneCroisiere={item.cruiseLine} id={id} setId={setId}  />} 
      keyExtractor={(item,index) => index.toString()} />
  </View>)}
  
  const PressableCroisiere = ({ligneCroisiere, id, setId})=> {
    return (<Pressable style={(id==ligneCroisiere)? [styles.pressable, styles.pressed]:styles.pressable}
            key={ligneCroisiere} onPress={()=>setId(ligneCroisiere)} >
        <Text style={styles.voyage} >{ligneCroisiere}</Text>
    </Pressable>)
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