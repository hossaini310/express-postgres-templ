import { query, pool } from '../db/index.js';

const dbGetMovies = async () => {
  const { rows } = await query('SELECT * FROM movies;');
  return rows;
};

const dbGetMovie = async (id) => {
  const { rows } = await query('SELECT * FROM movies WHERE id=$1;', [id]);
  return rows[0];
};

export { dbGetMovies, dbGetMovie };
