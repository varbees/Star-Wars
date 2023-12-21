import axios from 'axios';

export const getFilms = async () => {
  const res = await axios.get('https://swapi.dev/api/films');
  const data = await res.data.results;
  return data;
};
