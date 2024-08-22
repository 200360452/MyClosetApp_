/* data/db.js 

Script to initialize the database x tables, using Expo SQLiteProvider
By: Valérie Dupuy
Programmation d'ApplicationsMobiles _CLG_HÉ2024
*/ 



import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myclosetapp.db');

export const initDB = () => {
  db.transaction(tx => {
    // Create the 'products' table
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, price REAL, image TEXT)',
      [],
      () => console.log('Products table created successfully'),
      (_, error) => console.log('Error creating products table', error)
    );

    // Create the 'users' table
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT, admin BOOLEAN)',
      [],
      () => console.log('Users table created successfully'),
      (_, error) => console.log('Error creating users table', error)
    );
  });
};
