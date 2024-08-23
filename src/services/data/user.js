import { db } from './db';

// Function to get a user by name and password
export const getUser = (name, password, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users WHERE name = ? AND password = ?',
      [name, password],
      (_, { rows: { _array } }) => {
        callback(null, _array[0]);
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};

// Function to check if a user is an admin
export const isAdmin = (userId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT admin FROM users WHERE id = ?',
      [userId],
      (_, { rows: { _array } }) => {
        if (_array.length > 0) {
          callback(null, _array[0].admin);
        } else {
          callback(new Error('User not found'));
        }
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};

// Function to create a new user
export const createUser = (name, password, admin, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (name, password, admin) VALUES (?, ?, ?)',
      [name, password, admin],
      (_, result) => {
        callback(null, result.insertId);
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};
