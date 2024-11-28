import { createClient } from '@libsql/client';

const dbUrl = import.meta.env.VITE_DATABASE_URL || 'file:local.db';

export const db = createClient({
  url: dbUrl
});

export function initializeDatabase() {
  return Promise.all([initUsers(), initTrees()]);
}

async function initUsers() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT NOT NULL
      )
    `);

    const users = await db.execute('SELECT * FROM users LIMIT 1');
    if (!users.rows.length) {
      await db.batch([
        {
          sql: 'INSERT INTO users (id, email, password, name, role) VALUES (?, ?, ?, ?, ?)',
          args: ['1', 'admin@example.com', 'admin123', 'Admin User', 'admin']
        },
        {
          sql: 'INSERT INTO users (id, email, password, name, role) VALUES (?, ?, ?, ?, ?)',
          args: ['2', 'user@example.com', 'user123', 'Regular User', 'user']
        }
      ]);
    }
  } catch (error) {
    console.error('Error initializing users:', error);
  }
}

async function initTrees() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS trees (
        id TEXT PRIMARY KEY,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        message TEXT NOT NULL
      )
    `);

    const trees = await db.execute('SELECT * FROM trees LIMIT 1');
    if (!trees.rows.length) {
      await db.batch([
        {
          sql: 'INSERT INTO trees (id, latitude, longitude, title, image, message) VALUES (?, ?, ?, ?, ?, ?)',
          args: [
            '1',
            40.7128,
            -74.0060,
            'Ancient Oak',
            'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800',
            'This 300-year-old oak tree has been a witness to the city\'s history.'
          ]
        },
        {
          sql: 'INSERT INTO trees (id, latitude, longitude, title, image, message) VALUES (?, ?, ?, ?, ?, ?)',
          args: [
            '2',
            51.5074,
            -0.1278,
            'London Plane',
            'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800',
            'A resilient London Plane tree that helps clean the city\'s air.'
          ]
        }
      ]);
    }
  } catch (error) {
    console.error('Error initializing trees:', error);
  }
}