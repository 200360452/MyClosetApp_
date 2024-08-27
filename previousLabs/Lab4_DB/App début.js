//Labo4 

import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';

const initialNewNote = {id:0, titre: "", contenu: ""};  //vide
const db = new Database("notes");

// 3 composants


// 4 requêtes



export default function App() {
  const [note, setNote] = useState(initialNewNote);

  const vide=<Text>"Vous n'avez aucune note pour le moment!"</Text>;


  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Todo Notes</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  titre:{
    fontSize: 20,
    fontWeight:'bold'
  },
  NoteButton: {
    backgroundColor: "lightsalmon",
    paddingBottom: 5,
    marginBottom: 5
  },
  openNoteButton: {
    backgroundColor: "lightgrey",
    paddingBottom: 5,
    marginBottom: 5,
    fontSize: 16
  },
  showNewNoteFormButton: {
    backgroundColor: "salmon"
  },
  hideNewNoteFormButton: {
    backgroundColor: "grey",
    color: "white"
  },
  saveNoteButton: {
    backgroundColor: "lightblue"
  }
});
