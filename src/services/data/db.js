/* data/db.js

Script to initialize & populate the database & tables, using Expo SQLiteProvider
By: Valérie Dupuy
Programmation d'ApplicationsMobiles _CLG_HÉ2024
*/ 

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('store.db');

export const initializeDatabase = () => {
  db.transaction(tx => {
    // Creating the user table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        admin INTEGER DEFAULT 0
      );`,
      [], // No parameters
      () => console.log('User table created or already exists'),
      (tx, error) => {
        console.error('Error creating user table:', error);
        return false;
      }
    );

    // Creating the product table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        price REAL,
        image TEXT
      );`,
      [], // No parameters
      () => console.log('Product table created or already exists'),
      (tx, error) => {
        console.error('Error creating product table:', error);
        return false;
      }
    );
  });
};

export const populateUsers = () => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT OR IGNORE INTO users (name, email, password, admin) VALUES (?, ?, ?, ?)',
      ['admin', 'admin@example.com', 'password', 1],  // Ensure to hash the password in production
      () => console.log('Admin user inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting admin user:', error);
        return false;
      }
    );
    tx.executeSql(
      'INSERT OR IGNORE INTO users (name, email, password, admin) VALUES (?, ?, ?, ?)',
      ['user', 'user@example.com', 'password', 0],  // Ensure to hash the password in production
      () => console.log('Regular user inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting regular user:', error);
        return false;
      }
    );
  });
};

export const populateProducts = () => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT OR IGNORE INTO products (name, description, price, image) VALUES (?, ?, ?, ?)',
      ['Sample Product', 'This is a sample product description', 19.99, 'https://example.com/sample.jpg'],
      () => console.log('Sample product inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting sample product:', error);
        return false;
      }
    );
  });
};

export default db;
