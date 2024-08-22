/* data/db.js 

Script to initialize x populate the database x tables, using Expo SQLiteProvider
By: Valérie Dupuy
Programmation d'ApplicationsMobiles _CLG_HÉ2024
*/ 



import * as SQLite from 'expo-sqlite';

// Open or create the database
const db = SQLite.openDatabase('myclosetapp.db');

// Function to initialize and populate the database
export const initializeAndPopulateDB = () => {
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

    // Insert sample data into 'users'
    tx.executeSql(
      'INSERT INTO users (name, password, admin) VALUES (?, ?, ?)',
      ['admin1', 'adminpass', true],
      (_, result) => console.log('Admin user inserted successfully'),
      (_, error) => console.log('Error inserting admin user', error)
    );
    tx.executeSql(
      'INSERT INTO users (name, password, admin) VALUES (?, ?, ?)',
      ['client1', 'clientpass1', false],
      (_, result) => console.log('Client user 1 inserted successfully'),
      (_, error) => console.log('Error inserting client user 1', error)
    );
    tx.executeSql(
      'INSERT INTO users (name, password, admin) VALUES (?, ?, ?)',
      ['client2', 'clientpass2', false],
      (_, result) => console.log('Client user 2 inserted successfully'),
      (_, error) => console.log('Error inserting client user 2', error)
    );
    tx.executeSql(
      'INSERT INTO users (name, password, admin) VALUES (?, ?, ?)',
      ['admin2', 'adminpass2', true],
      (_, result) => console.log('Admin user 2 inserted successfully'),
      (_, error) => console.log('Error inserting admin user 2', error)
    );
  });
};

// Export the database instance and initialization function
export { db };
