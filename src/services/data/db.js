/* data/db.js 

Script to initialize x populate the database x tables, using Expo SQLiteProvider
By: Valérie Dupuy
Programmation d'ApplicationsMobiles _CLG_HÉ2024
*/ 
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myclosetapp.db');

export const initializeDB = () => {
  db.transaction(tx => {
    // Create product table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS product (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        price REAL,
        image TEXT,
        sku TEXT,
        barcode TEXT,
        location TEXT,
        quantity INTEGER,
        department TEXT,
        category TEXT,
        subcategory TEXT
      );`
    );

    // Create user table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
      );`
    );

    // Insert initial data
    populateProducts();
    populateUsers();
  });
};

const populateProducts = () => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO product (name, description, price, image, sku, barcode, location, quantity, department, category, subcategory) VALUES
       ('New Generation tulle sequins/beads top', 'A stylish top with sequins and beads', 22.00, 'https://example.com/image1.jpg', '22-687', 'W-TOP-TUN-BLAC-22-687', 'A1', 10, 'Women', 'Tops', 'Tunics'),
       ('17. Kate Spade & Beyond Yoga tank top', 'Comfortable tank top for yoga', 19.00, 'https://example.com/image2.jpg', '22-851', 'W-TOP-TAN-PINK-22-851', 'B2', 15, 'Women', 'Tops', 'Tank Tops'),
       ('R LABEL top', 'Elegant cream top by R Label', 7.00, 'https://example.com/image3.jpg', '22-788', 'W-TOP-CAM-CREA-22-788', 'A1', 8, 'Women', 'Tops', 'Camisoles'),
       ('Ella Moss T-shirt', 'Casual blue T-shirt by Ella Moss', 25.00, 'https://example.com/image4.jpg', '22-956', 'W-TOP-TEE-BLUE-22-956', 'B2', 12, 'Women', 'Tops', 'Tees - Short Sleeve'),
       ('Sequins top', 'Black sequins top from GGPX New York', 22.00, 'https://example.com/image5.jpg', '22-848', 'W-TOP-BLO-BLAC-22-848', 'C3', 5, 'Women', 'Tops', 'Blouses');`
    );
  });
};

const populateUsers = () => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO user (name, email, password) VALUES
       ('Valerie', 'blabla.lagence@gmail.com', 'your_password_hash'),
       ('Admin', 'chiic.happens@gmail.com', 'MissCharly2024!');`
    );
  });
};

export default db;
