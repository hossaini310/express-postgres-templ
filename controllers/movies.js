import { UserValidate } from '../validators/validators.js';
import { dbGetMovies, dbGetMovie } from '../models/movies.js';

const getMovies = async (req, res) => {
  const movies = await dbGetMovies();
  if (!movies) return res.status(404).send('Ressource not found');
  res.status(200).json(movies);
};

const getMovie = async (req, res) => {
  const movie = await dbGetMovie(req.params.id);
  if (!movie) return res.status(404).send('Ressource not found');
  return res.status(200).json(movie);
};

export { getMovies, getMovie };
