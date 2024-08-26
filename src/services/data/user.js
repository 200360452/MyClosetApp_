// user.js
import db from './db';

export const getAllUsers = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users',
      [],
      (_, { rows: { _array } }) => callback(null, _array),
      (_, error) => callback(error)
    );
  });
};

export const getUserById = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users WHERE id = ?',
      [id],
      (_, { rows: { _array } }) => callback(null, _array.length > 0 ? _array[0] : null),
      (_, error) => callback(error)
    );
  });
};

export const addUser = (name, email, password, admin = 0, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (name, email, password, admin) VALUES (?, ?, ?, ?)',
      [name, email, password, admin],
      (_, result) => callback(null, result.insertId),
      (_, error) => callback(error)
    );
  });
};

export const updateUser = (id, name, email, password, admin, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE users SET name = ?, email = ?, password = ?, admin = ? WHERE id = ?',
      [name, email, password, admin, id],
      (_, result) => callback(null, result.rowsAffected),
      (_, error) => callback(error)
    );
  });
};

export const deleteUser = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM users WHERE id = ?',
      [id],
      (_, result) => callback(null, result.rowsAffected),
      (_, error) => callback(error)
    );
  });
};
