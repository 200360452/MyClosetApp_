/**
 * Labo 4 Programmation Applications Mobile 2
 * Version expo-sqlite
 * Fait par : Khaoula EL mouanniss, formatage Lina 26 juin 2024
 */

import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput, FlatList, Alert} from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite'; //added
import {AntDesign} from '@expo/vector-icons';
const initialNewNote = {id:0, titre: "", contenu: ""};  //vide

async function initializeDatabase(db) {
  //await db.execAsync(`DROP TABLE IF EXISTS note;`);
  await db.execAsync(`PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY AUTOINCREMENT, titre TEXT, contenu TEXT);`);
}
   
// LES COMPOSANTS
// NoteButton component: Renders a note with edit and delete options
const NoteButton = ({ note, deleteNote, updateNote, selectedNote, setSelectedNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.titre);
    const [editedContent, setEditedContent] = useState(note.contenu);

    const handleSave = () => {
        updateNote(note.id, editedTitle, editedContent);
        setIsEditing(false);
    };

    return (
        <>
            <Pressable
                onPress={() => setSelectedNote(selectedNote === note.id ? null : note.id)}
                style={styles.noteButton}>
                <Text style={styles.noteText}>{note.titre}</Text>
                {selectedNote === note.id && (
                    <View style={styles.actions}>
                        <AntDesign name="edit"  size={18} color="blue" onPress={() => setIsEditing(!isEditing)}  style={styles.icon}  />
                        <AntDesign  name="delete" size={18} color="red" onPress={() => deleteNote(note.id)} style={styles.icon}  />
                    </View>
                )}
            </Pressable>
            {selectedNote === note.id && (
                <View style={styles.selectedNoteContent}>
                    {!isEditing ? (
                      <Text style={styles.noteContent}>{note.contenu}</Text>
                    ) : (
                        <View >
                            <TextInput style={styles.input} placeholder="Titre" value={editedTitle}
                                onChangeText={setEditedTitle}  />
                            <TextInput style={[styles.input, styles.textArea]} placeholder="Contenu"
                                value={editedContent} onChangeText={setEditedContent}
                                multiline={true}     numberOfLines={4}
                            />
                            <Pressable style={[styles.button, {backgroundColor: "lightblue"}]} onPress={handleSave}>
                                <Text style={styles.buttonText}>Sauvegarder</Text>
                            </Pressable>
                            <Pressable style={[styles.button, {backgroundColor:'grey'}]} onPress={()=>setIsEditing(!isEditing)}>
                                <Text style={[styles.buttonText, {color:'white'}]}>Annuler</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            )}
        </>
    );
};

// ButtonShowHide component: show or hide the new note form
const ButtonShowHide = ({ onPress, isShown }) => (
    <Pressable 
        style={[styles.button, isShown ? {backgroundColor: "grey"} : {backgroundColor: "salmon"}]} onPress={onPress}>
         <Text style = {isShown ? {color:'white'} : {color:'black'}}>{isShown ? 'Annuler' : 'Ajouter une nouvelle note'}</Text>
    </Pressable>
);

// NewNoteForm component: the form for adding a new note
const NewNoteForm = ({ note, setNote, addNote, setIsShown }) => (
    <View>
        <TextInput style={styles.input} placeholder="Titre" value={note.titre}
            onChangeText={(text) => setNote({ ...note, titre: text })} />
        <TextInput  style={[styles.input, styles.textArea]} placeholder="Contenu" value={note.contenu}
            onChangeText={(text) => setNote({ ...note, contenu: text })} multiline={true} numberOfLines={4} />
        <Pressable style={[styles.button, {backgroundColor: "lightblue"}]} onPress={()=>{addNote(note);setIsShown(false)}}>
            <Text>Sauvegarder</Text>
        </Pressable>
    </View>
);
  
//changed
export default function App() {
  return (
      <SQLiteProvider databaseName="notes.db" onInit={initializeDatabase}> 
          <View style={styles.container}>
              <Text style={styles.titre}>Todo Notes</Text>
              <Content /> 
          </View>
      </SQLiteProvider>
  );
}

 function Content() {
    const db = useSQLiteContext(); //added
    const [note, setNote] = useState(initialNewNote);
    const [notes, setNotes] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const vide = <Text>"Vous n'avez aucune note pour le moment!"</Text>;
    /**
     * Function to get and show all notes from the database
     */
    const showNotes = async () => {
        try {
            const allRows = await db.getAllAsync('SELECT * FROM note'); 
            setNotes(allRows);
            //console.log('les données :', allRows)
        }
        catch (error) {
            console.log('Erreur lors de la récupération des notes :', error);
        }
    };

    /**
     * Function to add a new note to the database
     * @param {*} newNote : the note to add (object)
     */
    const addNote = async(newNote) => {
        //console.log('La note à ajouter : ', newNote)
        if (newNote.titre.length == 0  || newNote.contenu.length == 0) {
            Alert.alert('Attention!', 'SVP tapez des données')
        } else {
            try {
                const statment = await db.prepareAsync('INSERT INTO note (titre, contenu) VALUES (?,?)');
                await statment.executeAsync([newNote.titre, newNote.contenu]);
                await showNotes(db);
                setNote(initialNewNote);
            }
            catch (error) {
                console.log('Erreur lors de l\'ajout de la note :', error);
            }  
        }
    };

    /**
     * Function to delete a note from the database
     * @param {*} id : the id of the note to delete
     */
    const deleteNote = async(id) => {
        try {
            await db.runAsync(`DELETE FROM note WHERE id = ?`, [id]);
            await showNotes(db);
        }
        catch (error) {
            console.log('Erreur lors de la suppression de la note :', error);
        }
    }

    /**
     * Function to update an existing note in the database
     * @param {*} noteId : the id of the note to update
     * @param {*} newTitre : the new title
     * @param {*} newContenu : the new content
     */
    const updateNote = async (noteId, newTitre, newContenu) => {
        if (newTitre && newContenu) {
            try {
                await db.runAsync('UPDATE note SET titre = ?, contenu = ? WHERE id = ?', [newTitre, newContenu, noteId]);
                await showNotes(db);
            } catch (error) {
                console.log('Erreur lors de la mise à jour de la note :', error);
            }
        }
    };

    // useEffect to initialize the database and load notes
    useEffect(() => {
      showNotes(db);
    }, []);

    return (
      <View>
          {notes.length === 0 ? (
              <Text>Vous n'avez aucune note pour le moment!</Text>
          ) : (
              <FlatList data={notes}
                renderItem={({ item }) => <NoteButton note={item} deleteNote={deleteNote} 
                                          selectedNote={selectedNote} setSelectedNote={setSelectedNote} updateNote={updateNote}/>}
                keyExtractor={(item) => item.id}
              />
          )}
          <ButtonShowHide onPress={() => setIsShown(!isShown)} isShown={isShown} />
          {isShown && <NewNoteForm note={note} setNote={setNote} addNote={addNote} setIsShown={setIsShown} />}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  titre: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  noteButton: {
    backgroundColor: "lightsalmon",
    padding: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteText: {
    fontSize: 18,
  },
  button : {
    padding: 5,
    marginVertical: 5,
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  noteContent: {
    fontSize: 16,
    backgroundColor: '#cdcdcd',
    padding: 10,
  },
  
  form: {
    margin: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 3,
    marginVertical: 3,
  },
  textArea: {
    height: 60,
  },
  icon: {
    marginHorizontal: 3,
    fontWeight: 'bold',
  },
});
