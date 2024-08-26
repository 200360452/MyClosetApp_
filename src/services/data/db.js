/* src/data/db.js

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
        photo_url TEXT,
        listing_url TEXT,
        listing_date TEXT,
        year_listed INTEGER,
        days_listed INTEGER,
        random_item_id TEXT,
        unic_item_id TEXT,
        item_sku TEXT,
        codebar TEXT,
        qr_code TEXT,
        full_bin_id TEXT,
        location_aisle TEXT,
        location_shelf TEXT,
        bin TEXT,
        new_bin_id TEXT,
        current_bin_id TEXT,
        department TEXT,
        category TEXT,
        subcategory TEXT,
        item_name TEXT,
        listing_title TEXT,
        listing_description TEXT,
        brand TEXT,
        style_tags TEXT,
        color TEXT,
        size TEXT,
        nwt TEXT,
        quantity_available INTEGER,
        likes INTEGER,
        cost_price REAL,
        lowest_listed_price REAL,
        current_listing_price REAL,
        other_info TEXT,
        seller_shipping_discount REAL
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
    // Product 1
    tx.executeSql(
      'INSERT OR IGNORE INTO products (photo_url, listing_url, listing_date, year_listed, days_listed, random_item_id, unic_item_id, item_sku, codebar, qr_code, full_bin_id, location_aisle, location_shelf, bin, new_bin_id, current_bin_id, department, category, subcategory, item_name, listing_title, listing_description, brand, style_tags, color, size, nwt, quantity_available, likes, cost_price, lowest_listed_price, current_listing_price, other_info, seller_shipping_discount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        'https://poshmark.ca/listing/New-Generation-tulle-sequinsbeads-top-63933cd21741bea81336e74a',
        'https://poshmark.ca/listing/New-Generation-tulle-sequinsbeads-top-63933cd21741bea81336e74a',
        '12/09/2022', 22, 595, '764', '22-764', 'W-TOP-TUN-BLAC-22-764-', '', '', '', '', 'Women', 'W', 'Tops', 'Tops', 'Tunics', 'Tuni', 'New Generation tulle sequins/beads top', 'Free Generation', '', 'Black', 'M', 'N', 1, 1, 22.00, 22.00, 22.00, '', 0
      ],
      () => console.log('Product 1 inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting product 1:', error);
        return false;
      }
    );

    // Product 2
    tx.executeSql(
      'INSERT OR IGNORE INTO products (photo_url, listing_url, listing_date, year_listed, days_listed, random_item_id, unic_item_id, item_sku, codebar, qr_code, full_bin_id, location_aisle, location_shelf, bin, new_bin_id, current_bin_id, department, category, subcategory, item_name, listing_title, listing_description, brand, style_tags, color, size, nwt, quantity_available, likes, cost_price, lowest_listed_price, current_listing_price, other_info, seller_shipping_discount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        'https://poshmark.ca/listing/17-Kate-Spade-Beyond-Yoga-tank-top-63961f84678c3a89a5e4d60b',
        'https://poshmark.ca/listing/17-Kate-Spade-Beyond-Yoga-tank-top-63961f84678c3a89a5e4d60b',
        '12/11/2022', 22, 593, '875', '22-875', 'W-TOP-TAN-PINK-22-875-', '', '', '', '', 'Women', 'W', 'Tops', 'Tops', 'Tank Tops', 'Tank', '17. Kate Spade & Beyond Yoga tank top', 'kate spade', '', 'Pink', 'S', 'N', 1, 6, 19.00, 19.00, 19.00, '', 0
      ],
      () => console.log('Product 2 inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting product 2:', error);
        return false;
      }
    );

    // Product 3
    tx.executeSql(
      'INSERT OR IGNORE INTO products (photo_url, listing_url, listing_date, year_listed, days_listed, random_item_id, unic_item_id, item_sku, codebar, qr_code, full_bin_id, location_aisle, location_shelf, bin, new_bin_id, current_bin_id, department, category, subcategory, item_name, listing_title, listing_description, brand, style_tags, color, size, nwt, quantity_available, likes, cost_price, lowest_listed_price, current_listing_price, other_info, seller_shipping_discount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        'https://poshmark.ca/listing/R-LABEL-top-6397440b32c1dc0977ddce32',
        'https://poshmark.ca/listing/R-LABEL-top-6397440b32c1dc0977ddce32',
        '12/12/2022', 22, 592, '995', '22-995', 'W-TOP-CAM-CREA-22-995-', '', '', '', '', 'Women', 'W', 'Tops', 'Tops', 'Camisoles', 'Cami', 'R LABEL top', 'R Label', '', 'Cream', 'L', 'N', 1, 3, 7.00, 40.00, 40.00, 'Mountain view Goodwill $6.29', 0
      ],
      () => console.log('Product 3 inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting product 3:', error);
        return false;
      }
    );

    // Product 4
    tx.executeSql(
      'INSERT OR IGNORE INTO products (photo_url, listing_url, listing_date, year_listed, days_listed, random_item_id, unic_item_id, item_sku, codebar, qr_code, full_bin_id, location_aisle, location_shelf, bin, new_bin_id, current_bin_id, department, category, subcategory, item_name, listing_title, listing_description, brand, style_tags, color, size, nwt, quantity_available, likes, cost_price, lowest_listed_price, current_listing_price, other_info, seller_shipping_discount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        'https://poshmark.ca/listing/Ella-Moss-T-shirt-63974e475d686bd0b0ce224f',
        'https://poshmark.ca/listing/Ella-Moss-T-shirt-63974e475d686bd0b0ce224f',
        '12/12/2022', 22, 592, '704', '22-704', 'W-TOP-TEE-BLUE-22-704-', '', '', '', '', 'Women', 'W', 'Tops', 'Tops', 'Tees - Short Sleeve', 'Tees', 'Ella Moss T -shirt', 'Ella Moss', '', 'Blue, White', 'S', 'N', 1, 2, 25.00, 25.00, 25.00, '', 0
      ],
      () => console.log('Product 4 inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting product 4:', error);
        return false;
      }
    );

    // Product 5
    tx.executeSql(
      'INSERT OR IGNORE INTO products (photo_url, listing_url, listing_date, year_listed, days_listed, random_item_id, unic_item_id, item_sku, codebar, qr_code, full_bin_id, location_aisle, location_shelf, bin, new_bin_id, current_bin_id, department, category, subcategory, item_name, listing_title, listing_description, brand, style_tags, color, size, nwt, quantity_available, likes, cost_price, lowest_listed_price, current_listing_price, other_info, seller_shipping_discount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        'https://poshmark.ca/listing/Sequins-top-63990909b635f8b4f3c794bd',
        'https://poshmark.ca/listing/Sequins-top-63990909b635f8b4f3c794bd',
        '12/13/2022', 22, 591, '623', '22-623', 'W-TOP-BLO-BLAC-22-623-', '', '', '', '', 'Women', 'W', 'Tops', 'Tops', 'Blouses', 'Blou', 'Sequins top', 'GGPX New York', '', 'Black, Gold', 'M', 'N', 1, 2, 22.00, 22.00, 22.00, '', 0
      ],
      () => console.log('Product 5 inserted or already exists'),
      (tx, error) => {
        console.error('Error inserting product 5:', error);
        return false;
      }
    );
  });
};
