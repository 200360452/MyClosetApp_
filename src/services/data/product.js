// product.js
import db from './db';

export const getAllProducts = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM products',
      [],
      (_, { rows: { _array } }) => callback(null, _array),
      (_, error) => callback(error)
    );
  });
};

export const getProductById = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM products WHERE id = ?',
      [id],
      (_, { rows: { _array } }) => callback(null, _array.length > 0 ? _array[0] : null),
      (_, error) => callback(error)
    );
  });
};

export const addProduct = (name, description, price, image, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)',
      [name, description, price, image],
      (_, result) => callback(null, result.insertId),
      (_, error) => callback(error)
    );
  });
};

export const updateProduct = (id, name, description, price, image, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?',
      [name, description, price, image, id],
      (_, result) => callback(null, result.rowsAffected),
      (_, error) => callback(error)
    );
  });
};

export const deleteProduct = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM products WHERE id = ?',
      [id],
      (_, result) => callback(null, result.rowsAffected),
      (_, error) => callback(error)
    );
  });
};
