import { db } from './db';

// Function to get all products
export const getAllProducts = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM products',
      [],
      (_, { rows: { _array } }) => {
        callback(null, _array);
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};

// Function to get a product by ID
export const getProductById = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM products WHERE id = ?',
      [id],
      (_, { rows: { _array } }) => {
        callback(null, _array[0]);
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};

// Function to add a new product
export const addProduct = (name, description, price, image, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)',
      [name, description, price, image],
      (_, result) => {
        callback(null, result.insertId);
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};

// Function to update a product
export const updateProduct = (id, name, description, price, image, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?',
      [name, description, price, image, id],
      (_, result) => {
        callback(null, result.rowsAffected);
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};

// Function to delete a product
export const deleteProduct = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM products WHERE id = ?',
      [id],
      (_, result) => {
        callback(null, result.rowsAffected);
      },
      (_, error) => {
        callback(error);
      }
    );
  });
};
