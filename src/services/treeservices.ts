import { db } from '../lib/db';
import { TreeMarker } from '../types/map';

export async function getAllTrees(): Promise<TreeMarker[]> {
  const result = await db.execute('SELECT * FROM trees');
  // First, cast the result.rows to unknown
  const rows = result.rows as unknown;
  
  // Then assert it to TreeMarker[]
  return rows as TreeMarker[];
}

export async function addTree(tree: Omit<TreeMarker, 'id'>): Promise<TreeMarker> {
  const id = crypto.randomUUID();
  await db.execute({
    sql: 'INSERT INTO trees (id, latitude, longitude, title, image, message) VALUES (?, ?, ?, ?, ?, ?)',
    args: [id, tree.latitude, tree.longitude, tree.title, tree.image, tree.message]
  });
  
  return { id, ...tree };
}